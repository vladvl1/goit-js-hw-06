const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const outputDefault = output.textContent;

textInput.addEventListener("input", event => {
    event.preventDefault;
    output.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        output.textContent = outputDefault;
    }
});