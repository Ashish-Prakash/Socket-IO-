socket.emit("user-connected", name);

socket.on("user-joinned", function(name){
    let joinchat = document.createElement("div");
    joinchat.classList.add("chat");
    joinchat.classList.add("join");
    joinchat.innerHTML = name + " joinned chat";
    chatWindow.append(joinchat);  
});

socket.on("user-leave", function(name){
    let leftChat = document.createElement("div");
    leftChat.classList.add("chat");
    leftChat.classList.add("leave");
    leftChat.innerHTML = name + " left chat";
    chatWindow.append(leftChat);  
});

socket.on("receiver-chat", function({name, chat}){
    let receiverchat = document.createElement("div");
    receiverchat.classList.add("chat");
    receiverchat.classList.add("left");
    receiverchat.innerHTML = name + " : " + chat;
    chatWindow.appendChild(receiverchat);
});