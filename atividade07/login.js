const modalLogin = new bootstrap.Modal(document.getElementById("login"), {});

console.log({ loggedUser });

if (!loggedUser) {
  modalLogin.show();
}

const formNewLogin = document.querySelector(".login-form");

formNewLogin.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");
  modalLogin.hide();

  localStorage.setItem("@zipzop:user", name);
});
