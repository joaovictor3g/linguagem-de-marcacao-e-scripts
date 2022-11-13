const messagesViewEl = document.querySelector(".messages-view");

async function loadMessages(groupId = 1) {
  try {
    const response = await fetch(`${BASE_URL}/grupos/${groupId}/mensagens`);
    const messages = await response.json();
    renderMessages(messages);
  } catch (error) {
    throw Error(error);
  }
}

function renderMessages(messages) {
  messagesViewEl.innerHTML = "";

  const loggedUserIn = localStorage.getItem("@zipzop:user");

  messages.forEach((message) => {
    const messageBoxEl = document.createElement("div");
    messageBoxEl.classList.remove("me");
    messageBoxEl.className = "message-box";

    if (message.nome === loggedUserIn) messageBoxEl.classList.add("me");

    const messageTextEl = document.createElement("span");
    const messageTextContent = document.createTextNode(message.corpo);
    messageTextEl.appendChild(messageTextContent);

    const messageAuthorEl = document.createElement("span");
    messageAuthorEl.className = "author";
    const messageAuthorName = document.createTextNode(message.nome);
    messageAuthorEl.appendChild(messageAuthorName);

    messageBoxEl.appendChild(messageTextEl);
    messageBoxEl.appendChild(messageAuthorEl);
    messagesViewEl.appendChild(messageBoxEl);
  });
}

loadMessages(currentGroupId);
