const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Choose a new port for the frontend

app.set('view engine', 'ejs');

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index'); // Render your EJS frontend
});

app.listen(port, () => {
    console.log(`Frontend app listening on port ${port}`);
});
