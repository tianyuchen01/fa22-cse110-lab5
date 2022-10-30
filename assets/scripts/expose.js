// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // horn selection
  let hornSelect = document.getElementById("horn-select");
  let hornImg = document.querySelector("header + img");
  let hornAudio = document.querySelector("audio");

  hornSelect.addEventListener("change", function() {
    // change img
    let hornValue = hornSelect.value;
    hornImg.setAttribute("src", `assets/images/${hornValue}.svg`);
    hornImg.setAttribute("alt", hornValue);
    // change audio
    hornAudio.setAttribute("src", `assets/audio/${hornValue}.mp3`);
  });

  // volume controll
  let volumeControl = document.getElementById("volume");
  let volumeImg = document.querySelector("#volume-controls img");
  
  volumeControl.addEventListener("input", function() {
    // change volume img
    let volumeValue = volumeControl.value;
    if (volumeValue == 0) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-0.svg");
    }
    else if (volumeValue < 33) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-1.svg");
    }
    else if (volumeValue < 67) {
      volumeImg.setAttribute("src", "assets/icons/volume-level-2.svg");
    }
    else {
      volumeImg.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
    // change audio volume
    hornAudio.volume = volumeValue / 100;
  });

  // click play sound effect
  let playButton = document.querySelector("button");
  const jsConfetti = new JSConfetti();

  playButton.addEventListener("click", function() {
    // play sound
    hornAudio.play();
    // add confetti
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

}