let socket = io();
socket.emit("user-connected", name);

socket.on("user-joinned", function(name){
    let joinchat = document.createElement("div");
    joinchat.classList.add("chat");
    joinchat.classList.add("join");
    joinchat.innerHTML = name + "Joinned Chat";
    chatWindow.append(joinchat);  
});