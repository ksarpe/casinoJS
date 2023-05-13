let spinButton = document.getElementById('spin-button'); // Replace with your button's ID
spinButton.addEventListener('click', function() {
    if (spinning && spinsRemaining > 3 && spinsRemaining < 30) {
            duration = 10;
    }
    else if (spinning){
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
let duration = 60;
const symbols = ['A', 'K', 'Q', 'J']; // Define the symbols , 'T', '9', '8'
const reels = Array(rowNumber).fill('-'.repeat(reelNumber)); // Initial reel values
let winningLines = [];

function reset(){
    spinsRemaining = 30;
    spinning = false;
    duration = 60;
}


function spinReels() {
    if (spinsRemaining <= 0) {
        return;
    }

    anime({
        targets: '.reel',
        translateY: [0, 150], // Change this to adjust the distance of the animation
        duration: duration, // Change this to adjust the speed of the animation
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
                if(reels.count == 4)
                {reels.pop();}
                
                processWin();
                
                setTimeout(function() {
                    reset();
                }, 500);
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
        case 'K':
            reelElement.style.color = 'blue';
            break;
        case 'Q':
            reelElement.style.color = 'green';
            break;
        case 'J':
            reelElement.style.color = 'purple';
            break;
        case 'T':
            reelElement.style.color = 'yellow';
            break;
        case '9':
            reelElement.style.color = 'white';
            break;
        case '8':
            reelElement.style.color = 'white';
            break;
        default:
            reelElement.style.color = 'white';
    }
}

function processWin(){
    let winningLines = checkForWins();
    let winAmount = calculateWin(winningLines);

    console.log(`You won ${winAmount} points on lines ${winningLines.map(win => win.positions).join(', ')}`);
}

// This function checks for winning lines and returns an array of the winning line numbers and counts

function checkForWins() {



    for (let win of winningLines) {
        for (let position of win.positions) {
            const reelId = `reel${position[0] * reelNumber + position[1] + 1}`;
            const reelElement = document.getElementById(reelId);
            reelElement.classList.add('blink');
        }
    }
    console.log(winningLines);
    console.log(reels);
    return winningLines;
}

// This function calculates the win amount based on the winning lines
function calculateWin(winningLines) {
    // For simplicity, let's say each winning line is worth 100 points times the count of same symbols
    let totalWin = 0;
    for (let win of winningLines) {
        totalWin += win.count * 100;
    }
    return totalWin;
}