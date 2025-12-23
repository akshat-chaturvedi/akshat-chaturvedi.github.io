// Get modal elements
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector("#image-modal .close");

// Open modal on click
document.querySelectorAll(".image-container img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.textContent = img.alt;
  });
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
}

// Close modal if clicking outside the image
modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
