function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");
const divControlEl = document.querySelector("#controls");


const destroyBoxes = () => {
  divBoxesEl.innerHTML = "";
};
const createBoxes = () => {
  const quantity = divControlEl.firstElementChild.value;
  const collectionBoxes = [];

  let baseHeight = 30;
  let baseWidth = 30;

  for (let i = 0; i < quantity; i++){
    const box = document.createElement("div");
    box.style.height = `${baseHeight}px`;
    box.style.width = `${baseWidth}px`;
    baseHeight += 10;
    baseWidth += 10;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    collectionBoxes.push(box);
  }
  divBoxesEl.append(...collectionBoxes);
}
createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);