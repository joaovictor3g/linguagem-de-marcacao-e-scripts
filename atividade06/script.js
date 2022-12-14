let posts = [
  {
    name: "Joao Victor",
    message:
      "Fala galeraa ๐ Acabei de subir mais um projeto no meu portifa. O nome do projeto รฉ DoctorCare ๐",
  },
  {
    name: "victor",
    message: "tudo bem?",
  },
  {
    name: "Carlos ",
    message: "Tรก quente hoje!",
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

  posts.unshift({ name, message });
  renderPosts(posts);

  document
    .querySelectorAll(".create-post-form input")
    .forEach((input) => (input.value = ""));

  closeModal();
});

renderPosts(posts);

// Handle Gallery image

let currentSlide = 0;
const imagesLength = 10;

const galleryImageModal = document.querySelector(
  ".overlay-image-gallery--modal .slides .images-slider"
);
const next = document.querySelector("button.next");
const prev = document.querySelector("button.prev");

next.addEventListener("click", () => {
  if (currentSlide === imagesLength) {
    next.setAttribute("disabled", true);
  } else {
    prev.removeAttribute("disabled");
    currentSlide++;
  }
  renderImages();
});

prev.addEventListener("click", () => {
  if (currentSlide <= 0) {
    prev.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
    currentSlide--;
  }
  renderImages();
});

function renderImages() {
  if (currentSlide <= 0) {
    prev.setAttribute("disabled", true);
  }

  const images = Array.from({ length: imagesLength });

  images.forEach((_, i) => {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/900/600?random=${i}`;
    galleryImageModal.appendChild(img);
  });

  galleryImageModal.childNodes.forEach((child) =>
    child.classList.remove("active")
  );

  galleryImageModal.childNodes[currentSlide].classList.add("active");
}

renderImages();

const overlayGalleryImage = document.querySelector(".overlay-image-gallery");
const closeGalleryImageModalButton = document.querySelector(
  ".overlay-image-gallery .overlay-image-gallery--modal .close-modal"
);
const openGalleryImageModalButton = document.querySelector(
  "button.image-gallery"
);

closeGalleryImageModalButton.addEventListener("click", closeGalleryImageModal);

openGalleryImageModalButton.addEventListener("click", openGalleryImageModal);

function closeGalleryImageModal() {
  overlayGalleryImage.classList.remove("opened");
}

function openGalleryImageModal() {
  overlayGalleryImage.classList.add("opened");
}
