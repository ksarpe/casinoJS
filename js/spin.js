let spinButton = document.getElementById('spin-button'); // Replace with your button's ID
spinButton.addEventListener('click', function() {
    if (spinning) {
        return;
    }
    else{
        spinReels();
        spinning = true;
    }
});

const reelNumber = 5; // Number of reels
const rowNumber = 4; // Number of rows
let spinsRemaining = 30; // Set the initial number of spins
let spinning = false; // Set the initial spinning state
const symbols = ['A', 'B', 'C', 'D', 'E']; // Define the symbols
const reels = Array(rowNumber).fill('-'.repeat(reelNumber)); // Initial reel values



function reset(){
    spinsRemaining = 30;
    spinning = false;
}


function spinReels() {
    if (spinsRemaining <= 0) {
        return;
    }

    anime({
        targets: '.reel',
        translateY: [0, 150], // Change this to adjust the distance of the animation
        duration: 60, // Change this to adjust the speed of the animation
        easing: 'easeInOutQuad',
        complete: function() {
            const newSymbols = [];

            // Generate random indexes to select symbols from the symbols array
            for (let j = 0; j < reelNumber; j++) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                newSymbols.push(symbols[randomIndex]);
            }

            // Add newSymbols to the top of the reels array
            reels.unshift(newSymbols.join(''));

            // Remove the bottom row from the reels array
            reels.pop();

            // Loop through each reel
            for(let i = 0; i < reels.length; i++) {
                for(let j = 0; j < reelNumber; j++) {
                    const reelId = `reel${i * reelNumber + j + 1}`;
                    const reelElement = document.getElementById(reelId);
                    reelElement.innerText = reels[i][j];

                    // Call setReelColor here to color the reel
                    setReelColor(reelElement, reels[i][j]);
                }
            }

            spinsRemaining--;
            if (spinsRemaining > 0) {
                setTimeout(spinReels, 0); // Adjust delay as needed
            } else {
                setTimeout(function() {
                    reset();
                }, 300);
            }
        }
    });
    //Sleep for 3 seconds to set everything again  
}



function setReelColor(reelElement, symbol) {
    switch (symbol) {
        case 'A':
            reelElement.style.color = 'red';
            break;
        case 'B':
            reelElement.style.color = 'green';
            break;
        case 'C':
            reelElement.style.color = 'blue';
            break;
        case 'D':
            reelElement.style.color = 'purple';
            break;
        case 'E':
            reelElement.style.color = 'yellow';
            break;
        default:
            reelElement.style.color = 'white';
    }
}