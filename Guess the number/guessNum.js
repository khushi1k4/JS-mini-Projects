// To generate a random number 
let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlots = document.querySelector(".guesses");
const lives = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let numGuess = 1; //number of times Guesses can be done to be initialised
let playGame = true; //when the true condition then we can play
let prevGuess = []; //array of previous guesses

if(playGame)
{
    submit.addEventListener("click", function(e){
        e.preventDefault(); //As it is working on form then the input value get into the server to avoid that we need to prevent it by preventDefault

        const guess = parseInt(userInput.value);
        validateGuess(guess);
    }, false);
}

function validateGuess(guess){
    //is the guess make for the number in the input field is valid or not as betwen 1 to 100 only if not in range not works
    if(isNaN(guess))
    {
        alert('Please enter a valid number.');
    }
    else if(guess<1 || guess>100)
    {
        alert("Enter a valid number.");
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMssg(`Game Over, Random Number was ${randomNum}.`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess)
{
    //to check whether the guess is correct or not with random num to return a message from the game
    if(guess === randomNum)
    {
        displayMssg(`You guessed the right number is ${randomNum}.`);
        endGame();
    }
    else if(guess<randomNum)
    {
        displayMssg('You guessed the too Low number.');
    }
    else if(guess>randomNum)
    {
        displayMssg('You guessed the too high number.');
    }

}

function displayGuess(guess)
{
    userInput.value = ''; //cleaning the value in userInput
    guessSlots += `${guess}, `;
    numGuess++;
    lives.innerHTML = `${10 - numGuess}`;

}

function displayMssg(mssg)
{
    lowOrHi.innerHTML = `<h2>${mssg}</h2>`;
}

function endGame()
{
    userInput.value = '';
    userInput.setAttribute("disabled",""); //setAttribute aalways used in key value pair so we used up disabled keyword with empty
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function startGame()
{
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click",function(e){
        
        randomNum = parseInt(Math.random() * 100 + 1);
        
        prevGuess = [];
        numGuess = 1;
        guessSlots.innerHTML = '';
        lives.innerHTML = `${10 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        
        playGame = true;

    },false);
}
