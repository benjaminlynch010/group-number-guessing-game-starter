$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#submit-button').on('click', handleSubmit);
  $('#restart-button').on('click', handleRestart)
}

// global variables
let correctAnswer = 0

// Total Guess Syntax
let guessCount = 0;


function handleSubmit(){
let guessOne = Number($('.player-one').val())
// console.log(guessOne)
let guessTwo = Number($('.player-two').val())
// console.log(guessTwo)

guessCount++
console.log('Guess Count', guessCount);

$('#guessArea').text('Guess Count: ' + guessCount);

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
    $('#winnerDiv').append(`Player One wins! Guess: ${num1} Answer: ${correctAnswer}`)
    //crazy Css here
  }
  else if (num2 == correctAnswer) {
    $('#winnerDiv').append(`Player Two wins! Guess: ${num2} Answer: ${correctAnswer}`)
    //crazy Css here
  }
  else {

    $('#playerOneTooLowHigh').text(" ")
    $('#playerTwoTooLowHigh').text(" ")
    // player one
    highOrLowOne(num1, correctAnswer)
    $('#playerOneTooLowHigh').prepend('Player One:')
    
    //player two
    highOrLowTwo(num2, correctAnswer)
    $("#playerTwoTooLowHigh").prepend('Player Two:')


    console.log('Play Again???')
  } // end conditional

  // append play again button here!
} // end checkGuess

function highOrLowOne(guess, answer) {
  if (guess > answer) {
    $('#playerOneTooLowHigh').append('Too High!');

  }
  if (guess < answer) {
    $('#playerOneTooLowHigh').append('Too Low!')
  }
}

function highOrLowTwo(guess, answer) {
  if (guess > answer) {
    $("#playerTwoTooLowHigh").append('Too High!')

  }
  if (guess < answer) {
    $("#playerTwoTooLowHigh").append('Too Low!')
  }
}

function handleRestart(event) {
  event.preventDefault()
  console.log('restart button working')
 
 $('#winnerDiv, #table-body, #high-low').text('')
 randomNumberGenerator(25)
 console.log(correctAnswer)
 guessCount = 0
}