const yesButton = document.getElementById("yesBtn");
const noButton = document.getElementById("noBtn");
const modal = document.getElementById("modal");
const Maincontainer = document.getElementById("mainModal");
const closeModal = document.getElementById("closeBtn");
const sentButton = document.getElementById("sentBtn");
const copyButton = document.getElementById("copyBtn")

// Random movement for the "No" button
noButton.addEventListener("mouseover", () => {
  const randomTop = Math.random() * 80 + 10;
  const randomLeft = Math.random() * 80 + 10;

  noButton.style.position = "absolute";
  noButton.style.top = `${randomTop}%`;
  noButton.style.left = `${randomLeft}%`;
});

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

copyButton.addEventListener("click", () => {
  const accountDetails = `
    7011750735
  `;
  navigator.clipboard.writeText(accountDetails)
});
