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

io.on("connection", function(socket){
    console.log(socket.id, "socket connected");
})
// app.listen(4000, function(){
//     console.log("App Started");
// })
server.listen(4000, function(){
    console.log("App started working");
})