const form = document.querySelector("#form-size");
const sizeField = document.querySelector("#Shoe-Size");
const sizeFieldError = document.querySelector("#size-error");
const resultField = document.querySelector("#form-result");

function validateForm(event) {
    
    event.preventDefault();

    const sizeIsValid = validateLength(sizeField.value);

    sizeFieldError.style.display = sizeIsValid ? "none" : "block";

    if (sizeIsValid) {
        displayMessage("sucsess", "Item put in shopping cart", container);
        setTimeout(function() {
            resultField.innerHTML = "";
        }, 10000);
        form.reset(); 
        return true;
    }
}
form.addEventListener("submit", validateForm);