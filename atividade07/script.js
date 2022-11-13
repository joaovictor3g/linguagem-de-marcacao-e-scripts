const messagesView = document.querySelector(".messages .messages-view");

function scrollBottom() {
  messagesView.scrollTop = messagesView.clientHeight;
}

scrollBottom();
