const playMusic = document.getElementById("playBtn");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("nextBtn");
const previous = document.getElementById("previousBtn");

// creating an array list for song titles, artists
const songList = [
    {
        track : "vivaLaVida",
        name : "Viva La Vida",
        artist : "Coldplay"
    },

    {
        track : "goldn",
        name : "Goldn",
        artist : "prazkhanal"
    },
    {
        track : "lofi",
        name : "Lofi Study",
        artist : "FASSound"
    }
];


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

const loadSong = (songList) => {
    title.textContent = songList.name;
    artist.textContent = songList.artist;
    music.src = `music/${songList.track}.mp3`
    image.src = `src/${songList.track}.png`
}

let songIndex = 0;
// loadSong(songList[2]);

// making the nextSong button work
const nextSong = () => {
    // incrementing the song index
    songIndex = (songIndex + 1)% songList.length;
    // if songindex is 0 0+1 % 3 = 1
    loadSong(songList[songIndex]);
    playSong();
}

const prevSong = () => {
    // decrementing the song index
    songIndex = (songIndex - 1 + songList.length);
    // if songIndex is 0 0-1 + 3 = 2 
    loadSong(songList[songIndex]);
    playSong();
}


next.addEventListener("click",nextSong);
previous.addEventListener("click", prevSong);