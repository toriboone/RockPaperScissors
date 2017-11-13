const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Not a valid input.');
   };
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
                      }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'You won!';
    } else {
      return 'Computer won!';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won!';
    } else {
      return 'Computer won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return 'You won!';
    } else {
      return 'Computer won!';
    }
  }

   if (userChoice === 'bomb') {
      return 'You won!';
    }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You choose ${userChoice}. Computer chooses ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
