const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const app = express();
const PORT = 3000;
const USERS_CSV = path.join(__dirname, 'users.csv');
const upload = multer({ dest: 'uploads/' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname)); // Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure users.csv exists
if (!fs.existsSync(USERS_CSV)) {
    fs.writeFileSync(USERS_CSV, 'username,password\n');
}

// Simulated session store
let sessions = {};

function readUsers() {
    const data = fs.readFileSync(USERS_CSV, 'utf8');
    return data.trim().split('\n').slice(1).map(line => {
        const [username, password] = line.split(',');
        return { username, password };
    });
}

function userExists(username) {
    return readUsers().some(u => u.username === username);
}

function writeUser(username, password) {
    fs.appendFileSync(USERS_CSV, `${username},${password}\n`);
}

// Registration route
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!password || password.length < 6) {
        return res.status(400).send('Password must be at least 6 characters long.');
    }
    if (userExists(username)) {
        return res.status(400).send('Username already exists.');
    }
    writeUser(username, password);
    res.send('Registered successfully!');
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = readUsers().find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).send('Invalid credentials.');
    }
    const sessionId = `${Date.now()}-${Math.random()}`;
    sessions[sessionId] = username;
    res.cookie('sessionId', sessionId, { httpOnly: true });
    res.send('Logged in successfully!');
});

// Logout
app.get('/logout', (req, res) => {
    const sessionId = req.cookies.sessionId;
    delete sessions[sessionId];
    res.clearCookie('sessionId');
    res.send('Logged out.');
});

// Auth status
app.get('/auth-status', (req, res) => {
    const sessionId = req.cookies.sessionId;
    const loggedIn = sessionId && sessions[sessionId];
    res.json({ loggedIn: !!loggedIn });
});

// Get posts
app.get('/get-posts', (req, res) => {
    try {
        const postsPath = path.join(__dirname, 'posts.json');
        const posts = fs.existsSync(postsPath)
            ? JSON.parse(fs.readFileSync(postsPath))
            : [];
        res.json(posts);
    } catch (err) {
        console.error('Error reading posts:', err);
        res.status(500).json({ error: 'Failed to load posts' });
    }
});

// Share post
app.post('/share', upload.array('images'), (req, res) => {
    const { projectName, description, sdgNumbers } = req.body;
    const sessionId = req.cookies.sessionId;
    const username = sessions[sessionId] || 'Unknown';

    const imagePaths = req.files.map(file => file.path);
    const post = {
        projectName,
        description,
        sdgNumbers,
        username,
        imagePaths
    };

    let existingPosts = [];
    if (fs.existsSync('posts.json')) {
        existingPosts = JSON.parse(fs.readFileSync('posts.json'));
    }
    existingPosts.push(post);
    fs.writeFileSync('posts.json', JSON.stringify(existingPosts, null, 2));

    res.redirect('/posts.html');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});