let name = prompt("Enter Your Name");

let chatWindow = document.querySelector(".chat-window");

let inputBox = document.querySelector(".chat-input");

inputBox.addEventListener("keypress", function(event){
    // console.log(event);
    if(event.key == "Enter" && inputBox.value){
        let senderChat = document.createElement("div");
        senderChat.classList.add("chat");
        senderChat.classList.add("right");
        senderChat.innerHTML = inputBox.value;
        chatWindow.append(senderChat);

        socket.emit("chat-receiver", inputBox.value);

        inputBox.value = "";
    }
})
