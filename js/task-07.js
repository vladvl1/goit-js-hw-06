const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSize = document.querySelector("#font-size-control");
text.style.fontSize = fontSize.value + "px";

input.addEventListener("input", (event) => {
    text.style.fontSize = event.currentTarget.value + "px";
})