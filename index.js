const path = require('path');
const express = require('express');

const app = express();
<<<<<<< Updated upstream
const pathToIndex = path.join(__dirname, 'index.html');

function startServer() {
    console.log('Server started')
}
function indexRoute(req, res) {
    res.sendFile(pathToIndex);
    res.end('boobies');
}

app.use('/', indexRoute);
app.get('/shop')
=======

const pathToIndex = path.join(__dirname, 'index.html');

const startServer = () => {
    console.log('server started!');
}
const indexRoute = (req, res) => {
    res.sendFile(pathToIndex);
}

app.use('/', indexRoute);

>>>>>>> Stashed changes
app.listen(5000, startServer);