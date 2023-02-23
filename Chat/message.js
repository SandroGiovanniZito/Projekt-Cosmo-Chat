const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const exitButton = document.getElementById("exit-button");
const messages = document.getElementById("messages");

// Wenn der "Exit"-Button geklickt wird
exitButton.addEventListener("click", () => {
    socket.close();
  });