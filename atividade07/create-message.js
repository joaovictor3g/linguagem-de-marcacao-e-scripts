const createMessageForm = document.querySelector(".send-message form");
const inputMessageEl = document.querySelector(".send-message input[type=text]");

createMessageForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const loggedUserIn = localStorage.getItem("@zipzop:user");

  const formData = new FormData(event.target);
  const message = formData.get("message");

  if (!message.trim()) {
    return alert("Mensagem vazia!!");
  }

  const newMessage = {
    nome: loggedUserIn,
    corpo: message,
    grupoId: currentGroupId,
  };

  try {
    await fetch(`${BASE_URL}/mensagens`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await loadMessages(currentGroupId);
    scrollBottom();

    inputMessageEl.value = "";
  } catch (error) {
    throw Error(error);
  }
});
