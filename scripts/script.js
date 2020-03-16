// Create the sound variable using Howler
var sound = new Howl({
    src: ['sound/sound.mp3'],
    html5: true,
    loop: true
});

// Variable volume
volume = 0.5;

function changeVolume() {
    volume = parseFloat(volume);
    Howler.volume(volume);
}

function playSound() {
    var text = window.document.getElementById('button');
    text.innerHTML = "Pause";

    volume = parseFloat(volume);
    Howler.volume(volume);

    if (sound.playing()) {
        text.innerHTML = "Click to Play";
        sound.pause();
    } else {
        text.innerHTML = "Click to Pause";
        sound.play();
    }
}