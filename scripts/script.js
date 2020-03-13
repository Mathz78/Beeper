function beeper() {
    x = 3;

    var sound = document.getElementById("audio");
    sound.play();
    setTimeout(beeper, x*1000);

    // var text = window.document.getElementById('button');
    // text.innerText = "Click here to stop";
}