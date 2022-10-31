// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  // populate voice selection dropdown
  const synth = window.speechSynthesis;
  let voiceSelect = document.querySelector("select");
  let voices = [];

  synth.addEventListener("voiceschanged", function() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  });  

  // press button effect
  let textInput = document.getElementById("text-to-speak");
  let btn = document.querySelector("button");

  btn.addEventListener("click", function() {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);

    // change face when speaking
    let face = document.querySelector("img");
    utterThis.addEventListener("start", function() {
      face.setAttribute("src", "assets/images/smiling-open.png");
    });
    utterThis.addEventListener("end", function() {
      face.setAttribute("src", "assets/images/smiling.png");
    });
  });

}