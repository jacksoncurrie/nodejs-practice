const express = require("express");
const path = require('path');
const app = express();

app.use(express.static('css'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'html/about.html'));
});

app.listen(8080);