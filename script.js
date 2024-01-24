let randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  document.querySelector('#subt').addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}



const validateGuess = (guess)=>{
    if (isNaN(guess)) {
  alert('please enter a valid number')      
    }else  if(guess < 1) {
      alert('please enter a valid number') 
    }else  if(guess >= 100) {
      alert('please enter a valid number less than 100') 
    }else{
      prevGuess.push(guess)
      if(numGuess === 11){
        dispGuess(guess)
        dispMessage(`Game over, Random number was ${randomNumber}`)
        endGame()
      }else {
        dispGuess(guess)
        checkGuess(guess)

      }
    }
}

const checkGuess = (guess)=>{
  if(guess===randomNumber){
     dispMessage(`You guessed it right`)
     endGame()
  }else if (guess < randomNumber){
    dispMessage(`Number is too low`)
  }else if (guess > randomNumber){
    dispMessage(`Number is too high`)
  }
}

const dispGuess = (guess)=>{
  userInput.value = ''
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = ` ${8-numGuess}`
}

const dispMessage = (message) =>{
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = ()=>{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame" >Start New Game </h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}

const newGame = ()=>{
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click' , function (e){
  randomNumber = parseInt(Math.random() * 100 + 1);
  prevGuess = []
  numGuess =  1;
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${8-numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  playGame = true;

})
}

