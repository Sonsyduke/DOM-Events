// const form = document.querySelector("#tweetForm");
// const input = document.querySelector("#dogName");
// const list = document.querySelector("#dogs");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const dogName = input.value;
//   const newLi = document.createElement("li");
//   newLi.innerText = dogName;
//   list.append(newLi);
//   input.value = "";
// });

const tweetForm = document.querySelector("#tweetForm");
const tweetContainer = document.querySelector("#tweets");
tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

function addTweet(username, tweet) {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  tweetContainer.append(newTweet);
}
