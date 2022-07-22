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

// EVENT LISTENER
const v3 = document.querySelector("#v3");
v3.addEventListener("click", function () {
  alert("You clicked v3");
});

function twist() {
  console.log("TWIST");
}
function shout() {
  console.log("SHOUT");
}

const tasBtn = document.querySelector("#tas");

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;

tasBtn.addEventListener("click", twist);
tasBtn.addEventListener("click", shout);
