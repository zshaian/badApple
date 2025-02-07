alert("click anywhere to play the bad apple");

const container = document.getElementById("container-element");
const audio = new Audio("./assets/badapple.mp3");

const start = () => {
  console.log("only once");
  audio.play();
  setTimeout(() => {
    container.style.backgroundImage = "url('./assets/badapple.gif')";
  }, 500);
  window.removeEventListener("click", start);
};

audio.loop = true;

window.addEventListener("click", start);
