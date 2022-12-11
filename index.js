const path = require('path');
const express = require('express');

const app = express();
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
app.listen(5000, startServer);