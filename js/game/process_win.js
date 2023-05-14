import { reelsAmount } from './config.js';

export function showWin(result) {
    // For simplicity, let's say each winning line is worth 100 points times the count of same symbols
    let totalWin = 0;
    for (let win of result) {
        // TODO: Make some real calulations based on the lines that have been won
        totalWin += win.count * 100;

        for (let position of win.line) {
            const reelId = `reel${position[0] * reelsAmount + position[1] + 1}`;
            const reelElement = document.getElementById(reelId);
            reelElement.classList.add('blink');
        }
        
    }
    return totalWin;
}