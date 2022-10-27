let posts = [
  {
    name: "Joao Victor",
    message:
      "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. O nome do projeto é DoctorCare 🚀",
  },
  {
    name: "victor",
    message: "tudo bem?",
  },
  {
    name: "Carlos ",
    message: "Tá quente hoje!",
  },
];

const hamburgerMenuButton = document.querySelector(
  ".feed-header .actions .hamburger-menu"
);

const asideMenu = document.querySelector(".feed-main-aside");

hamburgerMenuButton.addEventListener("click", () => {
  asideMenu.classList.toggle("active");
});

const postsSection = document.querySelector(".feed-main-section");

function renderPosts(_posts) {
  postsSection.innerHTML = "";

  _posts.forEach((post, i) => {
    const divPostBox = document.createElement("div");
    divPostBox.classList.add(`post-box`);
    divPostBox.setAttribute("id", i);

    const authorSpan = document.createElement("span");
    authorSpan.classList.add("post-box--author");
    const authorName = document.createTextNode(post.name);
    authorSpan.appendChild(authorName);

    const contentP = document.createElement("p");
    contentP.classList.add("post-box--content");
    const content = document.createTextNode(post.message);
    contentP.appendChild(content);

    divPostBox.appendChild(authorSpan);
    divPostBox.appendChild(contentP);

    postsSection.append(divPostBox);
  });
}

// handles modal form

const createPostButton = document.querySelector("button.create-post");
const overlayModal = document.querySelector(".overlay");
const closeModalButton = document.querySelector(".modal .close-modal");

const createNewPostForm = document.querySelector(".create-post-form");

function closeModal() {
  overlayModal.classList.remove("opened");
}

createPostButton.addEventListener("click", () => {
  overlayModal.classList.add("opened");
});

closeModalButton.addEventListener("click", closeModal);

createNewPostForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const message = formData.get("message");

  posts.push({ name, message });
  renderPosts(posts);

  document
    .querySelectorAll(".create-post-form input")
    .forEach((input) => (input.value = ""));

  closeModal();
});

renderPosts(posts);
