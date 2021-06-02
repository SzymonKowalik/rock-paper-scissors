console.log("%cRock | Paper | Scissors - The Game",
		"font-size: 18px; color: white; background: #222; padding: 15px;");

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
	playerChoice = playerChoice.charAt(0).toUpperCase() +
			playerChoice.slice(1).toLowerCase();
	let winner;

	if (playerChoice === 'Rock' || playerChoice === 'Paper' ||
			playerChoice === 'Scissors') {
		return playerChoice;
	} else {
		console.error('Wrong choice! Try again.');
		return playerPlay();
	}
}


function playRound(computerChoice, playerChoice) {

	if (computerChoice === playerChoice) {
		winner = null;
		console.log(`There was a draw! Both players used ${playerChoice}`)
		return winner;
	} else if (computerChoice === 'Rock' && playerChoice === 'Scissors' ||
			computerChoice === 'Scissors' && playerChoice === 'Paper' ||
			computerChoice === 'Paper' && playerChoice === 'Rock') {
		console.log(`Computer won - ${computerChoice} > ${playerChoice}`);
		winner = 'computer';
		return winner;
	} else {
		console.log(`Player won - ${playerChoice} > ${computerChoice}`);
		winner = 'player';
		return winner;
	}
}

function game() {
	let computerPoints = 0;
	let playerPoints = 0;

	while(computerPoints < 3 && playerPoints < 3) {
		let computerChoice = computerPlay();
		let playerChoice = playerPlay();
		playRound(computerChoice, playerChoice);

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