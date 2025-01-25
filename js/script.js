function continueGame(){
    // generating random alphabet
    const alphabet = generateRandomAlphabet();

    // setting the random alphabet to the screen
    setElementValueById('random-alphabet-show', alphabet)

    //setting background color to the matched key
    addClassToElementById(alphabet, 'bg-orange-500')
}

function play(){
    hideElementById('home-section');
    showElementById('playground-section');
    continueGame();
}
