const express = require('express');

const server = express();

server.get('/', function(req, res) {
    res.sendFile(__dirname + '/static/index.html')
});

server.use('/css', express.static(__dirname + '/static/css'));
server.use('/javascript', express.static(__dirname + '/static/javascript'));
server.use('/assets', express.static(__dirname + '/static/assets'));

server.use('/err', express.static(__dirname + '/static/err/index.html'));

server.use((req, res, next) => {
    res.status(404).redirect('/err')
});

server.listen(process.env.PORT || 5000, function() {
    console.log('\n\n\nRunning done!')
});