
import express from 'express';
import { createServer } from 'node:http';
import { Server } from "socket.io";
const app = express();  //configuration
const server = createServer(app);

const group="joinGroup"
const io=new Server(server,{
    cors:{
        origin:'*'
    }
})

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
    socket.on('joinRoom',async (name)=>{
        console.log(`${name} joined the group`)
        await socket.join(group)
    })
});

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});