const email = document.querySelector(".email-recipent");
const input = document.getElementById("email-input");
const submit = document.getElementById("enter");
const recipent = document.getElementById("email-recipent");
const success = document.getElementById("success-container");
const container = document.getElementById("container");
const dismiss = document.getElementById("dismiss");

const error = document.getElementById("error");

var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

input.addEventListener("submit", displaySuccess);
submit.addEventListener("click", displaySuccess);
dismiss.addEventListener("click", function () {
  location.reload();
});

function displaySuccess() {
  if (emailPattern.test(input.value)) {
    success.style.display = "block";
    container.style.display = "none";
  } else {
    error.style.display = "block";
    input.style.backgroundColor = "hsl(4, 100%, 67%)";
    input.style.borderColor = "red";
    input.style.color = "red";
  }

  recipent.innerHTML = input.value;
}
