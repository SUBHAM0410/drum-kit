var i = document.querySelectorAll(".drum").length;
for (var a = 0; a < i; a++) {
  document.querySelectorAll("button")[a].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;

    makeSoundKey(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSoundKey(event.key);
  buttonAnimation(event.key);

})

function makeSoundKey(key) {
  switch (key) {
    case "w":
      var audio = new Audio('crash.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('kick-bass.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('snare.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;

    case "j":
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;

    case "l":
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;


    default:
      console.log(this.innerHTML);

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
