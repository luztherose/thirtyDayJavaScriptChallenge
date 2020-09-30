
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; // stop the function from running all together.
    //play audio
    audio.currentTime = 0; // rewind to the start
    audio.play();
    // add css class
    key.classList.add("playing");
}
function removeTransition(e) {
    if(e.propertyName !== "transform")return // skip it if it's not a transform
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// listen for an event
window.addEventListener("keydown", playSound);
