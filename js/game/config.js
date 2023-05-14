import { setReelColor } from './helpers.js';
export const winningLines = [
    // Horizontal lines
    [[0,0], [0,1], [0,2], [0,3], [0,4]], // top row         //1
    [[1,0], [1,1], [1,2], [1,3], [1,4]], // middle row      //2
    [[2,0], [2,1], [2,2], [2,3], [2,4]], // bottom row      //3
    // Diagonal lines
    [[0,0], [1,1], [2,2], [1,3], [0,4]], // V-style         //4
    [[2,0], [1,1], [0,2], [1,3], [2,4]], // A-style         //5
    [[1,0], [1,1], [0,2], [1,3], [1,4]], // _ _ - _ _       //6
    [[1,0], [1,1], [2,2], [1,3], [1,4]], // - - _ - -       //7
    [[1,0], [0,1], [1,2], [0,3], [1,4]], // _ - _ - _       //8
    [[1,0], [2,1], [1,2], [2,3], [1,4]], // - _ - _ -       //9
];
export const symbols = [
    { symbol: 'X2' },
    { symbol: 'A' }, { symbol: 'A' },
    { symbol: 'K' }, { symbol: 'K' }, { symbol: 'K' },
    { symbol: 'Q' }, { symbol: 'Q' }, { symbol: 'Q' },
    { symbol: 'J' }, { symbol: 'J' }, { symbol: 'J' },
    { symbol: 'T' }, { symbol: 'T' }, { symbol: 'T' }, { symbol: 'T' },
    { symbol: '9' }, { symbol: '9' }, { symbol: '9' }, { symbol: '9' }  
];
export const reelHeight = 150; //px

export const reelsAmount = 5;
const rowsAmount = 3;
export const reels = Array(rowsAmount).fill('-'.repeat(reelsAmount));

export const initialSpins = 25;
export const animeDuration = 80; //ms

export function initializeReels() {
    // Loop through each row in the reels
    const initialSymbols = ['J', 'X2', 'A', 'K'];
    const newReels = reels;

    for(let i = 0; i < newReels.length + 1; i++) {
        //if(i === 4) break;
        // Generate a new array of random symbols
        const newSymbols = Array(reelsAmount).fill({ symbol: initialSymbols[i] });
        console.log(newSymbols);
        newReels[i] = newSymbols;
        if(i === 4) break;

        // Update the reel elements
        for(let j = 0; j < reelsAmount; j++) {
            console.log(i,j);
            const reelId = `reel${i * reelsAmount + j + 1}`;
            const reelElement = document.getElementById(reelId);
            reelElement.innerText = reels[i][j].symbol;

            // Call setReelColor here to color the reel
            setReelColor(reelElement, newReels[i][j].symbol);
        }
    }
}


