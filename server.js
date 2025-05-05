const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

const USERS_CSV = path.join(__dirname, 'users.csv');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname)); // Serve HTML/CSS/JS from root folder

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

// Routes
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (userExists(username)) {
        return res.status(400).send('Username already exists.');
    }
    writeUser(username, password);
    res.send('Registered successfully!');
});

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

app.get('/logout', (req, res) => {
    const sessionId = req.cookies.sessionId;
    delete sessions[sessionId];
    res.clearCookie('sessionId');
    res.send('Logged out.');
});

app.get('/auth-status', (req, res) => {
    const sessionId = req.cookies.sessionId;
    const loggedIn = sessionId && sessions[sessionId];
    res.json({ loggedIn: !!loggedIn });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

if (!password || password.length < 6) {
    return res.status(400).send('Password must be at least 6 characters long.');
}