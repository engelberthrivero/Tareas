document.getElementById("send-btn").addEventListener("click", function() {
  sendMessage();
});

document.getElementById("message").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  var messageInput = document.getElementById("message");
  var message = messageInput.value;
  
  if (message.trim() !== "") {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = message;
    
    document.getElementById("chat-messages").appendChild(messageElement);
    
    messageInput.value = "";
  }
}

