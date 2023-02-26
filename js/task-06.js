const input = document.querySelector("#validation-input");
const check = input.getAttribute('data-length');

input.addEventListener("blur", (event) => {
    if (event.target.value.length === Number(check)) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
})