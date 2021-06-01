console.log("%cRock, paper, scissors - The Game",
		"font-size: 18px; color: red; background: black");

function computerPlay() {
	let computerSelection = Math.floor(Math.random() * 3);

	switch (computerSelection) {
		case 0:
			return 'Rock';
			break;
		case 1:
			return 'Paper';
			break;
		case 2:
			return 'Scissors';
			break;
	}
}

function playerPlay() {
	let playerChoice = prompt('Choose your tool: (Rock/Paper/Scissors)');
	playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	let winner;

	if (playerChoice === 'Rock' || playerChoice === 'Paper' ||
			playerChoice === 'Scissors') {
		return playerChoice;
	} else {
		console.error('Wrong choice! Try again.');
		return playerPlay();
	}
}


function playRound(playerSelection, computerSelection) {
	let computerChoice = computerPlay();
	let playerChoice = playerPlay();

	if (computerChoice === playerChoice) {
		winner = null;
		return winner;
	} else if (computerChoice === 'Rock' && playerChoice === 'Scissors' ||
			computerChoice === 'Scissors' && playerChoice === 'Paper' ||
			computerChoice === 'Paper' && playerChoice === 'Rock') {
		console.log(`Computer won ${computerChoice} beats ${playerChoice}`);
		winner = 'computer';
		return winner;
	} else {
		console.log(`Player won ${playerChoice} beats ${computerChoice}`);
		winner = 'player';
		return winner;
	}
}

function game() {
	let computerPoints = 0;
	let playerPoints = 0;

	while(computerPoints < 3 && playerPoints < 3) {
		playRound();

		switch(winner) {
			case 'computer':
				computerPoints++;
				break;
			case 'player':
				playerPoints++;
				break;	
		}
	}

	console.log(`Computer ${computerPoints}:${playerPoints} Player`);
}

game();