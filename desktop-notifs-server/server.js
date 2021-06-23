const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// https://www.npmjs.com/package/node-notifier
const notifier = require('node-notifier');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

app.post('/notify', (req, res) => {
    // notifier.notify({
    //     title: 'My notification',
    //     message: 'Hello, there!'
    //   });
    io.emit('send notification');
    res.send('Notification sent');
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// Deploy via GCP: Writing Your Web Service with Node.js
// https://cloud.google.com/appengine/docs/standard/nodejs/building-app

// https://socket.io/get-started/chat