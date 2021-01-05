function DrumAudio (audioFileName) {
  this.audioObj = new Audio("sounds/" + audioFileName + ".mp3");
  this.play = function () {this.audioObj.play()}
}

let tom_1 = new DrumAudio("tom-1");
let tom_2 = new DrumAudio("tom-2");
let tom_3 = new DrumAudio("tom-3");
let tom_4 = new DrumAudio("tom-4");
let crash = new DrumAudio("crash");
let kick_bass = new DrumAudio("kick-bass");
let snare = new DrumAudio("snare");

function audioPlayByKey(key) {
  switch(key) {
    case "w":
      tom_1.play();
    case "a":
      tom_2.play();
      break;
    case "s":
      tom_3.play();
      break;
    case "d":
      tom_4.play();
      break;
    case "j":
      crash.play();
      break;
    case "k":
      kick_bass.play();
      break;
    case "l":
      snare.play();
      break;
    default:
      return;
  }
}

function buttonFlash(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed")
  setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}


let buttonList = document.querySelectorAll("button.drum");

for(let i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("click", handleClick);
  buttonList[i].addEventListener("click", buttonFlash);
}

function handleClick() {
  let buttonText = this.innerHTML
  audioPlayByKey(buttonText);
  buttonFlash(buttonText);
}

document.addEventListener("keydown", handleKeyPress)

function handleKeyPress(e) {
  let keyPressed = e.key;
  audioPlayByKey(keyPressed);
  buttonFlash(keyPressed);
}