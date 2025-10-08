const titleElement = document.querySelector("h2");
const basilChefs = ["mama", "papa", "baby"];
const basilTexture = ["greasy", "frozen", "spicy"];

function random(array) {
  const max = array.length;
  const randomIndex = Math.floor(Math.random() * max);
  return array[randomIndex];
}

const recipeName = `${random(basilChefs)}'s ${random(basilTexture)} Basil`;
titleElement.innerText = recipeName;
// console.log(recipeName);

// --------------------- //

const btn = document.querySelector(".beta");
const modal = document.querySelector("dialog");

btn.addEventListener("click", function () {
  modal.showModal();
});

modal.addEventListener("close", function (event) {
  if (modal.returnValue !== "confirm") return;
  console.log("confirmed");
});
