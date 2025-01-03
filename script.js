const yesButton = document.getElementById("yesBtn");
const modal = document.getElementById("modal");
const Maincontainer = document.getElementById("mainModal");
const closeModal = document.getElementById("closeBtn");
const sentButton = document.getElementById("sentBtn");

// Open modal on "Yes" button click
yesButton.addEventListener("click", () => {
  modal.classList.add("active");
  Maincontainer.style.display = 'none';
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  Maincontainer.style.display = 'block';
});

sentButton.addEventListener("click", () => {
  modal.classList.remove("active");
  Maincontainer.style.display = 'block';
});
