// Preload the audio file
const rejoiceSound = document.getElementById('rejoiceSound');
rejoiceSound.preload = 'auto';
// Preload the audio
// Function to play rejoice sound
function playRejoiceSound() {
    rejoiceSound.currentTime = 0;
    // Reset audio to start
    rejoiceSound.play(); // Play the audio
} // Function to trigger confetti
function triggerConfetti() {
    confetti({
        particleCount: 700,
        spread: 500,
        origin: {
            y: 0.5
        }
    });
}
// Function to check if all tiles are flipped
function checkAllTilesFlipped() {
    const gridItems = document.querySelectorAll('.grid-item');
    const allFlipped = Array.from(gridItems).every(item => {
        return item.classList.contains('flipped');
    });
    if (allFlipped) {
        playRejoiceSound();
        triggerConfetti();
    }
}
// Add event listener to each tile
document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('flipped');
        checkAllTilesFlipped();
    });
});

window.onload = function() {
    var img = new Image();
    img.src = 'images/background.jpg';
    img.onload = function() {
        document.body.style.backgroundImage = 'url('+ img.src +')';
    }
}
