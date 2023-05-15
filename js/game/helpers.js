export function removeEffects(){
    let blinkingElements = document.querySelectorAll('.blink');
    blinkingElements.forEach(element => element.classList.remove('blink'));

    //horizontal lines
    let horizontalLinesLeft = document.querySelectorAll('.highlight-horizontal-left');
    horizontalLinesLeft.forEach(element => element.classList.remove('highlight-horizontal-left'));
    let horizontalLinesRight = document.querySelectorAll('.highlight-horizontal-right');
    horizontalLinesRight.forEach(element => element.classList.remove('highlight-horizontal-right'));

    //diagonal lines
    let diagonalLinesTopLeft = document.querySelectorAll('.highlight-diagonal-topleft');
    diagonalLinesTopLeft.forEach(element => element.classList.remove('highlight-diagonal-topleft'));
    let diagonalLinesTopRight = document.querySelectorAll('.highlight-diagonal-topright');
    diagonalLinesTopRight.forEach(element => element.classList.remove('highlight-diagonal-topright'));
    let diagonalLinesBottomLeft = document.querySelectorAll('.highlight-diagonal-bottomleft');
    diagonalLinesBottomLeft.forEach(element => element.classList.remove('highlight-diagonal-bottomleft'));
    let diagonalLinesBottomRight = document.querySelectorAll('.highlight-diagonal-bottomright');
    diagonalLinesBottomRight.forEach(element => element.classList.remove('highlight-diagonal-bottomright'));
    
    
}

export function setReelColor(reelElement, symbol) {
    switch (symbol) {
        case "X2":
            reelElement.style.color = 'gold';
            break;
        case "A":
            reelElement.style.color = 'red';
            break;
        case "K":
            reelElement.style.color = 'blue';
            break;
        case "Q":
            reelElement.style.color = 'green';
            break;
        case "J":
            reelElement.style.color = 'purple';
            break;
        case "10":
            reelElement.style.color = 'black';
            break;
        case "9":
            reelElement.style.color = 'white';
            break;
        default:
            reelElement.style.color = 'transparent';
    }
}

