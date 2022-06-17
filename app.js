// element selection;
const form = document.forms[0];
const inputField = document.forms[0][0]
const correctScore = document.querySelector('#correct-times')
const wrongScore = document.querySelector('#wrong-times')
const ul = document.querySelector('.history ul')
// const createdLi = document.createElement('li');
const resetBtn = document.querySelector('.btn')
const maxPlayLimit = document.querySelector('.max-play-limit')
const maxLimitFixed = document.querySelector('.max-limit')
const setGame = document.querySelector('.btn-set-game')
const maxGuessNumber = document.querySelector('.max-guess')

// Data Layer
let submitted = 0, // 1, 2, 3
    maxSubmittedLimit = 5,
    correctScoreValue = 0,
    wrongScoreValue = 0,
    gameOver = false,
    playBetweenNumber = 10;

maxGuessNumber.textContent = playBetweenNumber;

maxLimitFixed.textContent = maxSubmittedLimit;


// logical function


function randomNumberMatching(value){
    let randomNumber = Math.round(Math.random() * playBetweenNumber)
    console.log(randomNumber);
    if(!gameOver && randomNumber === value){
        // alert('Wow! Matched');
        correctScoreValue++;
        correctScore.textContent = correctScoreValue
        
        const createdLi = document.createElement('li');
        createdLi.textContent = 'Wow! Matched'
        createdLi.setAttribute('style', 'background-color: rgb(1, 180, 45)')
        ul.appendChild(createdLi)

    }else if(!gameOver && randomNumber < value){
        wrongScoreValue++;
        wrongScore.textContent = wrongScoreValue
        // alert('Your guess high')
        const createdLi = document.createElement('li');
        createdLi.textContent = 'Your Guess is High'
        ul.appendChild(createdLi)

    }else if(!gameOver && randomNumber > value){
        wrongScoreValue++;
        wrongScore.textContent = wrongScoreValue
        // alert('guess low')
        const createdLi = document.createElement('li');
        createdLi.textContent = 'Your Guess is low'
        ul.appendChild(createdLi)

    }    
}

function playAgain(){
    resetBtn.setAttribute('style', 'display:inline-block')
        const createdLi = document.createElement('li');
        createdLi.textContent = 'Game Over! Hit the play again!!'
        // createdLi.classList.add('play-again')
        createdLi.setAttribute('style', 'background-color: hsl(7, 90%, 53%)')
        ul.appendChild(createdLi)

}


function refreshPage(){
    window.location.reload();
}

function maxLimitLive(value){
    const newValue = value--;
    maxPlayLimit.textContent = newValue;
    // return newValue;
}
let minValue = maxSubmittedLimit;
maxPlayLimit.innerText = maxSubmittedLimit;
// Event Listener

setGame.addEventListener('click', ()=>{
    let playBetween = parseInt(prompt('play between 0 to : (value must be getter than 0)'))
    if(playBetween > 0){
        playBetweenNumber = playBetween;
        maxGuessNumber.textContent = playBetweenNumber;
    }

    // maximum play limit form user 
    let setLimitValue = parseInt(prompt('want set play limit? (value must be getter than 0)'))
    if(setLimitValue>0){
    maxSubmittedLimit = setLimitValue;
    maxLimitFixed.textContent = maxSubmittedLimit;
    minValue = setLimitValue;
    maxPlayLimit.textContent = minValue;
    }
  
})



form.addEventListener('submit', (e) => {
    e.preventDefault()
    submitted++;
    minValue--;
    console.log(minValue);
    maxPlayLimit.innerText = minValue;
    const inputValue = Number(inputField.value);

    if(submitted <= maxSubmittedLimit){
        randomNumberMatching(inputValue)
        
    } else{
        // alert('Game Over')
        gameOver = true;
        playAgain();
    }
    inputField.value = ''
    
    if(gameOver){
    }
    if(minValue < 1){
        minValue = 0;
    maxPlayLimit.innerText = minValue;
        
    }
})


resetBtn.addEventListener('click', ()=>{
    refreshPage();
})


