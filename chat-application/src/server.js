
import express from 'express';
import { createServer } from 'node:http';
import { Server } from "socket.io";
const app = express();  //configuration
const server = createServer(app);


const io=new Server(server,{
    cors:{
        origin:'*'
    }
})
const group="joinGroup"
io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
    socket.on('joinRoom',async (userName)=>{
         console.log(`${userName}is joining the group`)
        await socket.join(group)

        // io.to(group).emit('roomJoinedNotification',userName)
       
        // if we need to send only to other users then we use socket
        socket.to(group).emit("roomJoinedNotification",userName)

    })
    socket.on('chatMessage',async (msg)=> {
        socket.to(group).emit('chatMessage',msg)
    })
    socket.on('typing',async userName=>{
        socket.to(group).emit('typing',userName)
    })
     socket.on('stopTyping',async userName=>{
        socket.to(group).emit('stopTyping',userName)
    })
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});