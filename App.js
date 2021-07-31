// var username = prompt("Give me your name");
// var welcome = "this scrpit works " + username;

// alert(welcome);
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
// console.log(outputDiv);
// outputDiv.innerText = "blaahh";

// console.log(btnTranslate);

var textInput = document.querySelector("#text-input");
function clickHandler() {
  outputDiv.innerText = "gg " + textInput.value;
}
btnTranslate.addEventListener("click", clickHandler);
