const express = require("express");

const app = express();

const http = require('http');

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

// app.get("/", function(request, response){
//     response.send("<h1>Hello Express</h1>")
// })

app.use(express.static("public"));

let users = [];

io.on("connection", function(socket){
    // console.log(socket.id, "socket connected");
    socket.on("user-connected", function(name){
        users.push({id : socket.id, name : name});
        console.log(users);
        socket.broadcast.emit("user-joinned", name);
    });

    socket.on("chat-receiver", function(chat){
        let name;
        for(let i=0;i<users.length;i++){
            if(users[i].id == socket.id){
                name = users[i].name;
                break;
            }
        }
        socket.broadcast.emit("receiver-chat", {name, chat});
    });

    socket.on("disconnect", function(){
        let disconnectedUser;
        let filterdUsers = users.filter((userObj) => {
            if(userObj.id == socket.id){
                disconnectedUser = userObj;
                return false;
            }
            return true;
        })
        users = filterdUsers;
        console.log(users);
        socket.broadcast.emit("user-leave", disconnectedUser.name);
    });
});

// app.listen(4000, function(){
//     console.log("App Started");
// })

server.listen(4000, function(){
    console.log("App started working");
})