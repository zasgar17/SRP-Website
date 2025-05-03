const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));

const usersFile = path.join(__dirname, 'users.csv');
const postsFile = path.join(__dirname, 'posts.csv');

// === Image Upload Setup ===
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public/images'),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});
const upload = multer({ storage });

// === Helper: Read CSV ===
function readCSV(filePath) {
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf8');
    return content.trim().split('\n').map(line => line.split(','));
}

// === Register ===
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const users = readCSV(usersFile);
    if (users.find(u => u[0] === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    fs.appendFileSync(usersFile, `${username},${password}\n`);
    res.cookie('username', username, { httpOnly: true });
    res.json({ message: 'Registered successfully' });
});

// === Login ===
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = readCSV(usersFile);
    const user = users.find(u => u[0] === username && u[1] === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.cookie('username', username, { httpOnly: true });
    res.json({ message: 'Logged in' });
});

// === Logout ===
app.post('/logout', (req, res) => {
    res.clearCookie('username');
    res.json({ message: 'Logged out' });
});

// === Share a Post ===
app.post('/share', upload.single('image'), (req, res) => {
    const username = req.cookies.username;
    if (!username) return res.status(403).json({ message: 'Unauthorized' });

    const { description } = req.body;
    const imagePath = `/images/${req.file.filename}`;
    fs.appendFileSync(postsFile, `${username},${description},${imagePath}\n`);
    res.json({ message: 'Post shared' });
});

// === Get Posts ===
app.get('/posts', (req, res) => {
    const posts = readCSV(postsFile).map(([username, description, imagePath]) => ({
        username,
        description,
        imagePath
    }));
    res.json(posts);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
