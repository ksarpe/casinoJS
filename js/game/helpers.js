export function removeBlinking(){
    let blinkingElements = document.querySelectorAll('.blink');
    blinkingElements.forEach(element => element.classList.remove('blink'));
}

export function setReelColor(reelElement, symbol) {
    switch (symbol) {
        case "X2":
            reelElement.style.color = 'gold';
            reelElement.style.fontStyle = 'italic';          
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
        case "T":
            reelElement.style.color = 'black';
            break;
        case "9":
            reelElement.style.color = 'white';
            break;
        default:
            reelElement.style.color = 'none';
    }
}

