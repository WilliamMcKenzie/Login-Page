function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove("form__message--success", "form__message--error");
  messageElement.classList.add(`form__message--${type}`);
}

function setInputError(message, inputElement){
  inputElement.classList.add("form__input--error")
  inputElement.parentElement.querySelector(".form__message--error").textContent = message
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");


  document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    e.preventDefault();
    createAccountForm.classList.remove("form__hidden");
    loginForm.classList.add("form__hidden");
  });
  document.querySelector("#linkLogin").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.remove("form__hidden");
    createAccountForm.classList.add("form__hidden");
  });
  loginForm.addEventListener("submit", e => {
    e.preventDefault();

    setFormMessage(loginForm, "error", "Invalid login information")
  });
  document.querySelectorAll(".form__input").forEach(inputElement => {
    inputElement.addEventListener("blur", e => {
        if(e.target.id === "username" && e.target.value.length > 10){
          setInputError("The max name length is 10", inputElement)
        }
    });
  });
});