// var username = prompt("Give me your name");
// var welcome = "this scrpit works " + username;

// alert(welcome);

var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");
var textInput = document.querySelector("#text-input");

//var url = "https://lessonfourapi.tejs1.repl.co/translate/yoda.json";
var url = "https://api.funtranslations.com/translate/minion.json";
function urlcreator(text) {
  return url + "?text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("server down, try after some time");
}

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  var inputText = textInput.value;

  fetch(urlcreator(inputText))
    .then((response) => response.json())
    .then(
      (json) => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
      }
      // console.log(json.contents.text)
      // console.log(json.contents.translation)
    )
    .catch(errorHandler);
}
