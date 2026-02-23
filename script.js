// script.js

// Example: show a welcome message
document.addEventListener("DOMContentLoaded", () => {
  console.log("English Quest portal loaded!");
});

// Example: modal open/close functions
function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
  document.body.style.overflow = "";
}