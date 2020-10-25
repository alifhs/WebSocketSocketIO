const socket = io.connect('http://localhost:3000');

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');


//event emiting

btn.addEventListener('click', ()=>{
    socket.emit('chat', {
        
        handle:handle.value,
        message:message.value,

    });
});

//listening to events

socket.on('chat', (data)=>{
    output.innerHTML += '<p><strong>'+ data.handle + '</strong> : ' +data.message + '</p>';
})