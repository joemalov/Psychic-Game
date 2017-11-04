
		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		var lettersGuessed = [];
		var computerLetter = null;
		var guessesLeft = 9;

		var wins = 0;
		var losses = 0;

		var updateGuessesLeft = function() {
	    	document.querySelector("#remainingGuesses").innerHTML = guessesLeft;
	    };

	    var updateLetterToGuess = function() {
      		computerLetter = letters[Math.floor(Math.random() * letters.length)];
    	};

        var updateGuessesSoFar = function() {
      		document.querySelector("#currentGuesses").innerHTML = lettersGuessed;
    	};

    	var reset = function() {
      		guessesLeft = 9;
      		guessedLetters = [];
      		updateLetterToGuess();
      		updateGuessesLeft();
      		updateGuessesSoFar();
    	};

    	updateGuessesLeft();


		document.onkeyup = function(event) {
			guessesLeft--;
			var letter = String.fromCharCode(event.keyCode).toLowerCase();
			lettersGuessed.push(letter);
			updateGuessesLeft();
			updateGuessesSoFar();

			if (letter === computerLetter) {
				wins++;
				document.querySelector("#wins").innerHTML = wins;
				reset();
			};

			if (guessesLeft === 0) {
				losses++;
				document.querySelector("#losses").innerHTML = losses;
				reset();
			};
		};