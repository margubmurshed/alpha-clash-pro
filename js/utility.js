function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function generateRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabetString.split("");
    const randomNumber = Math.round(Math.random()*25);
    const randomAlphabet = alphabetsArray[randomNumber];
    return randomAlphabet;
}

function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value
}
function addClassToElementById(elementId, className){
    const element = document.getElementById(elementId);
    element.classList.add(className);
}