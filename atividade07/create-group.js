const myModal = new bootstrap.Modal(
  document.getElementById("create-group"),
  {}
);

const modalEl = document.getElementById("create-group");

const createNewGroup = document.querySelector(
  ".new-group-container .new-group"
);

createNewGroup.addEventListener("click", () => {
  myModal.show();
});

const formNewGroup = document.querySelector(".create-group-form");

formNewGroup.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get("name");

  try {
    await fetch(`${BASE_URL}/grupos`, {
      method: "POST",
      body: JSON.stringify({ nome: name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await loadGroups();
    myModal.hide();
  } catch (error) {
    throw Error(error);
  }
});
