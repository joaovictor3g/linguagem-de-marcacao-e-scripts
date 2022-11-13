const messagesView = document.querySelector(".messages .messages-view");

function scrollBottom() {
  const height = messagesView.scrollHeight;
  messagesView.scroll({
    behavior: "smooth",
    top: height,
  });
}

scrollBottom();
