const path = require('path');
const express = require('express');

const app = express();

const pathToIndex = path.join(__dirname, 'index.html');

function startServer() {
    console.log('Server started')
}
function indexRoute(req, res) {
    res.sendFile(pathToIndex);
}

app.use('/', indexRoute);

app.listen(5000, startServer);