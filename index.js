const express = require('express');
const socket = require('socket.io');
const app = express();

const server = app.listen(3000, ()=>{
    console.log('listening to port 3000');    //returns http.server object
}); 
  

app.use(express.static('public'));

const io = socket(server);   // passing the http server object, the server that socket server will work with

io.on('connection', (socket)=>{   //here socket extends EventEmitter class 
    console.log('made socket connection');

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
        console.log(data.handle);
    })
});