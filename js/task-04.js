let counterValue = 0;
let step = 1;

const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

const handleDecrementBtn = () => {
    counterValue -= step;
    valueEl.textContent = counterValue;
}
const handleIncrementBtn = () => {
    counterValue += step;
    valueEl.textContent = counterValue;
}
counterEl.firstElementChild.addEventListener("click", handleDecrementBtn);
counterEl.lastElementChild.addEventListener("click", handleIncrementBtn);