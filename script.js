function play(soundId) {
    var sound = document.getElementById(soundId)
    sound.play()
    
    setTimeout(sound.currentTime = 0, 1000);
}