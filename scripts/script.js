var sound = new Howl({
    src: ['sound/sound.mp3'],
    html5: true,
    loop: true
});

function playSound() {
    var text = window.document.getElementById('button');
    text.innerHTML = "Pause";

    if (sound.playing()) {
        text.innerHTML = "Click to Play";
        sound.pause();
    } else {
        text.innerHTML = "Click to Pause";
        sound.play();
    }
        
    Howler.volume(0.5);
}
