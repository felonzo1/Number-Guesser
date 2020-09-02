/*
GAME FUNCTION
-Player must guess a number between a min and max
-Player gets a certain amount of guessess
-Notify Player of guesses remaining 
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

// Gamme Value
let min = 1, max = 10, winningNum = getRandomNum(min, max),
guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

// Assign UI min and Max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener
game.addEventListener('mousedown', function (e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }

    e.preventDefault;
});

// Listen to guess
guessBtn.addEventListener('click',  () => {
    let guess = parseInt(guessInput.value);
    
    if(isNaN(NaN) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if(guess === winningNum){
        // Game Over won
        // disable input
        gameOver(true, `${winningNum} is Correct, YOU WON`)

        // guessInput.disabled = true;
        // // Change border
        // guessInput.style.borderColor = 'green';
        // // Set message
        // setMessage(`${winningNum} is Correct, YOU WON`, 'green')
    } else {
        // Wrong number
        guessesLeft-=1;

        if(guessesLeft === 0){
            // Game over- lost
          
            gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)

            // // Disable input
            // guessInput.disabled = true;
            // // Change border
            // guessInput.style.borderColor = 'red';
            // // Set message
            // setMessage(`Game over, you lost. The correct number was ${winningNum}`, 'red');
        } else {
            // Game continues- answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value ='';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red'
     // disable input
     guessInput.disabled = true;
     // Change border
     guessInput.style.borderColor = color
     message.style.color = color
     // Set message
     setMessage(msg);

    //  play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get Winning Number

function getRandomNum(min, max){
    return Math.floor((Math.random()*(max-min+1)+ min));
}

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}


