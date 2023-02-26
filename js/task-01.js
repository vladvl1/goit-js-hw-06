const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
console.log('');

const element = [...items];
element.forEach(elem => {
    console.log(`Categories: ${elem.firstElementChild.textContent}`);
    console.log(`Elements ${elem.lastElementChild.childElementCount}`);
    console.log('');
});

