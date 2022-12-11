const path = require('path');
const express = require('express');

const app = express();

app.use('/assets',express.static(__dirname + '/public/css'));
app.use('/assetsImg',express.static(__dirname + '/public/images'));


const pathToIndex = path.join(__dirname, 'home.html');

var startServer= () => {
    console.log('Server started');
}

var indexRoute = (req, res) => {
    res.sendFile(pathToIndex);
}

app.use('/', indexRoute);
app.listen(5000, startServer);