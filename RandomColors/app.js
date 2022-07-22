const button = document.querySelector("button");
const heading = document.querySelector("h1");
const body = document.querySelector("body");

button.addEventListener("click", function () {
  body.style.backgroundColor = randomColor();
  heading.textContent = randomColor();
});

function randomColor() {
  const red = Math.floor(Math.random() * 255) + 1;
  const green = Math.floor(Math.random() * 255) + 1;
  const blue = Math.floor(Math.random() * 255) + 1;
  const rgb = `rgb(${red},${green},${blue})`;
  return rgb;
}
