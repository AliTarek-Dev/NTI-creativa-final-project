const heartBtn = document.querySelector(".social .fa-heart").closest("button");
const heartIcon = heartBtn.querySelector("i");
heartBtn.addEventListener("click", function () {
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("fa-solid");
  heartIcon.classList.toggle("text-danger");
});
const emailInput = document.querySelector('footer input[type="email"]');
const subscribeBtn = document.querySelector("footer .btn-dark");
subscribeBtn.addEventListener("click", function () {
  if (emailInput.value.includes("@")) {
    emailInput.value = "";
    subscribeBtn.textContent = "Subscribed ✓";
  } else {
    emailInput.style.outline = "2px solid red";
  }
});
