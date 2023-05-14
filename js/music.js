let backgroundMusic = document.getElementById('backgroundMusic');
let spinButton = document.getElementById('spin-button');
spinButton.addEventListener('click', function() {
    if (!hasInteracted) {
        backgroundMusic.play();
        hasInteracted = true;
    }});

let hasInteracted = false;


// You can also pause and resume the music based on user interactions. 
// For example, you could add a button to mute/unmute the music:
let muteButton = document.getElementById('mute-button');
muteButton.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
    }
});
