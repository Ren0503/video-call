const express= require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const stream = require('./ws/stream');
const path = require('path');
const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/index.html' );
});

io.of('/stream').on('connection', stream);

server.listen(3000);