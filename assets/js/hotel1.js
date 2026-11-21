const paymentInputs = document.querySelectorAll('input[name="paymentOption"]');
function highlightPayment() {
  paymentInputs.forEach(function (input) {
    const label = input.closest("label");
    label.classList.toggle("bg-mint", input.checked);
  });
}
paymentInputs.forEach(function (input) {
  input.addEventListener("change", highlightPayment);
});
highlightPayment();
const openCardBtn = document.getElementById("openCardModal");
const closeCardBtn = document.getElementById("closeCardModal");
const cardModal = document.getElementById("cardModal");
openCardBtn.addEventListener("click", function () {
  cardModal.classList.add("show");
});

closeCardBtn.addEventListener("click", function () {
  cardModal.classList.remove("show");
});
const cardForm = document.getElementById("cardForm");
const cardNumber = document.getElementById("cardNumber");
cardForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const digits = cardNumber.value.replace(/\D/g, "");
  if (digits.length < 13) {
    cardNumber.classList.add("is-invalid");
    return;
  }
  cardNumber.classList.remove("is-invalid");
  openCardBtn.textContent = "Card ending in " + digits.slice(-4) + " added ✓";
  cardForm.reset();
  cardModal.classList.remove("show");
});
