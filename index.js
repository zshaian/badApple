alert("click anywhere to play the bad apple");

const container = document.getElementById("container-element");

window.addEventListener("click", () => {
  const audio = new Audio("./assets/badapple.mp3");

  audio.loop = true;

  audio.play();

  setTimeout(() => {
    container.style.backgroundImage = "url('./assets/badapple.gif')";
  }, 500);
});
