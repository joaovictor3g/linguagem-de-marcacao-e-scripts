const messagesView = document.querySelector(".messages .messages-view");
const sendMessageEl = document.querySelector(".send-message");

function scrollBottom() {
  const height = messagesView.scrollHeight;
  messagesView.scroll({
    behavior: "smooth",
    top: height,
  });
}

function toggleInputSendMessage() {
  if (currentGroupId === -1) {
    sendMessageEl.style.display = "none";
  } else {
    sendMessageEl.style.display = "initial";
  }
}

scrollBottom();
toggleInputSendMessage();
