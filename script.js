const playMusic = document.getElementById("playBtn");
const music = document.querySelector("audio");
const image = document.querySelector("img");

let isPlaying = false;

const playSong = ()=>{
    isPlaying = true;
    music.play();
    image.classList.add("animation");
    playMusic.classList.replace("fa-play", "fa-pause")
};

const pauseSong = ()=>{
    isPlaying = false;
    music.pause();
    image.classList.remove("animation");
    playMusic.classList.replace("fa-pause", "fa-play")
};

playMusic.addEventListener("click", () =>{
    isPlaying ? pauseSong() : playSong();
});