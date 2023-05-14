// export functions
import {removeBlinking, setReelColor} from './helpers.js';
import {showWin} from './process_win.js';
// export consts
import {winningLines, reelsAmount, reels, initialSpins, animeDuration, reelHeight, symbols, initializeReels} from './config.js';

//initialize reels to not be empty
window.addEventListener('load', initializeReels);

let spinButton = document.getElementById('spin-button');
spinButton.addEventListener('click', function() {
    //if user clicks during spinning and there are some spins remaining
    if (spinning && spinsRemaining > 3 && spinsRemaining < initialSpins) {duration = 20;}
    //if user clicks when spinning is under finalizing
    else if (spinning){return;}
    //if user clicks and spin is available
    else{spinReels();removeBlinking();spinning = true;}});

let spinsRemaining = initialSpins;
let spinning = false;
let duration = animeDuration;

function reset(){
    spinsRemaining = initialSpins;
    spinning = false;
    duration = animeDuration;
}

function spinReels() {
    anime({
        targets: '.reel',
        translateY: [0, reelHeight],
        duration: duration,
        easing: 'easeInOutQuad',
        complete: function() {
            const newSymbols = [];

            // Generate random indexes to select symbols from the symbols array
            for (let j = 0; j < reelsAmount; j++) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                newSymbols.push(symbols[randomIndex]);
            }

            //Add top, remove bottom
            reels.unshift(newSymbols);
            reels.pop();

            // Loop through each reel
            for(let i = 0; i < reels.length; i++) {
                for(let j = 0; j < reelsAmount; j++) {
                    const reelId = `reel${i * reelsAmount + j + 1}`;
                    const reelElement = document.getElementById(reelId);
                    reelElement.innerText = reels[i][j].symbol;

                    // Call setReelColor here to color the reel
                    setReelColor(reelElement, reels[i][j].symbol);
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

function processWin(){
    let result = checkLines();
    let winAmount = showWin(result);

    console.log(`YOU WON ${winAmount} RETKINIA DOLLARS!`);
}

// For usage in checkLines()
function checkSymbols(symbols) {
    let firstSymbol = symbols[0].symbol;
    let count = 0;

    // iterate over the symbols
    for(let i = 0; i < symbols.length; i++) {
        // count until the symbol is different
        if(symbols[i].symbol === firstSymbol) {
            count++;
        } else {
            break;
        }
    }

    return count;
}

function checkLines() {
    let result = [];

    // Check each winning line
    for (let line of winningLines) {
        let symbols = line.map(([i, j]) => reels[i][j]);  // Get the symbols for this line
        console.log("CheckLines(): ", symbols);
        
        let count = checkSymbols(symbols);
        // If there are three or more of the same symbol, add this line to the result
        if (count >= 3) {
            result.push({line: line.slice(0, count), count: count, symbol: symbols[0].symbol});
            // push e.x -> line : [[0,0], [0,1], [0,2]], count : 3, symbol : 'A'
        }
    }
    console.log("CheckLines(): ", result);
    return result;
}