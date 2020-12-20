let audio = document.querySelector(`audio`)

let action = document.querySelector(`.playerContainer`)

let image = document.querySelector(`#album`)

let currentSong = document.querySelector(`#trackName`)

let backBtn = document.querySelector(`#back`)

let playBtn = document.querySelector(`#play`)

let nextBtn = document.querySelector(`#next`)




// Song titles
let music = [`bensound-dreams`, `bensound-moose`, `bensound-scifi`]

//keep track of current song
let musicIndex = 1

//initialize default song and details
playMusic(music[musicIndex])

//change song details relative to array index
function playMusic(music){
    currentSong.innerText =`${music}.mp3`
    audio.src = `audio/${music}.mp3`
    image.src = `img/${music}.jpg`

}

//start playing song and start animation
function playTrack(){
    action.classList.add(`play`)
    playBtn.querySelector('i.fas').classList.remove('fa-play-circle')
    playBtn.querySelector('i.fas').classList.add('fa-pause-circle')
    
    audio.play()
}

//pause song and kill animation
function pauseTrack(){
    action.classList.remove(`play`)
    playBtn.querySelector('i.fas').classList.add('fa-play-circle')
    
    
    
    audio.pause()
}

// previous song in the array
function backOne(){
    musicIndex--

    if(musicIndex < 0) {
        musicIndex = music.length - 1
    }

        playMusic(music[musicIndex])

        playTrack()

    
}

//next song in the array
function nextOne(){
    musicIndex++

    if(musicIndex > music.length - 1) {
        musicIndex = 0
    }

        playMusic(music[musicIndex])

        playTrack()

    
}


// function to check if a song is being played with conditional for pause and play 
let running = function(){
    let songPlaying = action.classList.contains(`play`)

    if(songPlaying){
        pauseTrack()
    } else {
        playTrack()
    }
}



// event listener for play button click

playBtn.addEventListener(`click`, running)

//event listener to change songs forward and back

backBtn.addEventListener(`click`, backOne)
nextBtn.addEventListener(`click`, nextOne)

//event listener to transition to next song when song ends

audio.addEventListener(`ended`, nextOne)

