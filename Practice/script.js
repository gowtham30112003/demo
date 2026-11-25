const button = document.getElementById("loveBtn");
const hiddenMessage = document.getElementById("hiddenMessage");
const song = document.getElementById("loveSong");

button.addEventListener("click", () => {
    hiddenMessage.style.display = "block";
    song.play();
});
