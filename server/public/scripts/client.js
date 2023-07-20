$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-button').on('click',handleSubmit);
}

// global variables
let correctAnswer = 0


function handleSubmit(){
let guessOne = Number($('.player-one').val())
// console.log(guessOne)
let guessTwo = Number($('.player-two').val())
// console.log(guessTwo)

$('#table-body').append(`
  <tr>
    <td>return from random# function</td>
    <td>${guessOne}</td>
    <td>${guessTwo}</td>
  </tr>
`)

checkGuess (guessOne, guessTwo)


}

function randomNumberGenerator(max) {
  correctAnswer = Math.floor(Math.random() * max)
return correctAnswer
}
correctAnswer = randomNumberGenerator(25)
console.log(correctAnswer)

function checkGuess(num1, num2) {
  if (num1 == correctAnswer) {
    console.log(`Player One wins! Guess: ${num1} Answer: ${correctAnswer}`)
  }
  else if (num2 == correctAnswer) {
    console.log(`Player Two wins! Guess: ${num2} Answer: ${correctAnswer}`)
  }
  else {
    // player one
    highOrLow(num1, correctAnswer)
    console.log('Player One:',)
    
    //player two
    highOrLow(num2, correctAnswer)
    console.log('Player Two:')


    console.log('Play Again???')
  } // end conditional

  // append play again button here!
} // end checkGuess

function highOrLow(guess, answer) {
  if (guess > answer) {
    console.log('Too High!')

  }
  if (guess < answer) {
    console.log('Too Low!')
  }
}