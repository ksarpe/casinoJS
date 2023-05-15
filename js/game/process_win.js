import { reelsAmount } from './config.js';

const prizes = {
    "A": 500,
    "K": 300,
    "Q": 200,
    "J": 100,
    "10": 50,
    "9": 20
}

export function showWin(result) {
    // For simplicity, let's say each winning line is worth 100 points times the count of same symbols
    let totalWin = 0;
    console.log(result);
    for (let win of result) {
        
        let symbolValue = prizes[win.symbol];
        totalWin += symbolValue * win.count * win.multiplier;

        for (let i = 0; i < win.line.length; i++) {
            const reelId = `reel${win.line[i][0] * reelsAmount + win.line[i][1] + 1}`;
            const reelElement = document.getElementById(reelId);

            //add blink to indicate winning line
            reelElement.classList.add('blink');

            //Check first column
            if(win.line[i][1] == 0){
                // get also second column
                const reelId2 = `reel${win.line[i + 1][0] * reelsAmount + win.line[i + 1][1] + 1}`;
                const reelElement2 = document.getElementById(reelId2);
                // if it is first row then there are two possibilities (right or down)
                if (win.line[i][0] == 0){
                    if(win.line[i+1][0] == 0) {
                        reelElement.classList.add('highlight-horizontal-right');
                        reelElement2.classList.add('highlight-horizontal-left');
                    }
                    else {
                        reelElement.classList.add('highlight-diagonal-bottomright');
                        reelElement2.classList.add('highlight-diagonal-topleft');
                    }
                }
                // if it is middle then there are three possibilites (right, down or up)
                else if (win.line[i][0] == 1){
                    if(win.line[i+1][0] == 1) {
                        reelElement.classList.add('highlight-horizontal-right');
                        reelElement2.classList.add('highlight-horizontal-left');
                    }
                    else if(win.line[i+1][0] == 0) {
                        reelElement.classList.add('highlight-diagonal-topright')
                        reelElement2.classList.add('highlight-diagonal-bottomleft')
                    }
                    else {
                        reelElement.classList.add('highlight-diagonal-bottomright')
                        reelElement2.classList.add('highlight-diagonal-topleft')
                    }
                }
            }
        }
        
    }
    return totalWin;
}