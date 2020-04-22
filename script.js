const form = document.getElementById("form");
const fName = document.getElementById("fName");
const lName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Show error message

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Hide error message

function showSucces(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.map((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.name} cannot be empty`);
    } else {
      showSucces(input);
    }
  });
}

// Check email format

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Looks like this is not an email");
  }
}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([fName, lName, email, password]);
  checkEmail(email);
});
