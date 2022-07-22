const v2 = document.querySelector("#v2");

v2.onclick = function () {
  console.log("YOU CLICKED ME");
  console.log("I HOPE IT WORKED!");
};

function scream() {
  console.log("AAAAAAAAHHHHHHH");
  console.log("STOP");
}

v2.onmouseenter = scream;

document.querySelector("h1").onclick = function () {
  alert("you clicked the h1");
};
