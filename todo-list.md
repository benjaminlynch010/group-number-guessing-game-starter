

## Base Mode
---


On submit button 'click'
	- send guesses to server
		- how?
	- random number
	- change round number
	- check if any guesses correct
	- 

>***All random number stuff should happen on the server: Generation of the random number upon game start as well as comparisons between guesses and the random correct answer.***

#### Started writing some code thoughts ####

```
// function to generate random number
//parameter is maximum number

function randomNumberGenerator(max) {
let correctAnswer == Math.floor(Math.random() * max)
return correctAnswer
// expected output: 25 > random number > 1
}


// conditional to check guesses
function guessChecker() {
	if (guess == correct answer) {
		console.log(Hooray!)
		return something
		.append something to change CSS?
		(Congrats ${player}!)
	} 
	if (guess != correct answer) {
	  display a sad message
	  .append <button id="something">Play Again?</button>
	  }
}

// start at round 1
let roundOfGame = 1
(play-again-button).on 'click'
roundOfGame++


```


Random number generator
	> All needs to happen on the server
		- generation of the random number on game start
		- comparisons between guesses
		- random answer
Input fields
	***check id vs classes before sourcing and referencing***
Submit button
Total guesses made indicator 
	- Count function


if guess is correct
	then new CSS style
	then restart button

Restart button tells server to generate new random number (POST)