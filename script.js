function computerPlay(){
    const choice = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

function playerPlay(){
    let playerChoice = prompt('Rock, Paper, or Scissors?')
    playerChoice = playerChoice.charAt(0).toUpperCase()
    + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection){
    let message = (playerSelection===computerSelection)? "It's a tie!":
    (playerSelection==='Rock'&&computerSelection=='Paper')? "You Lose! Paper beats Rock":
    (playerSelection==='Rock'&&computerSelection=='Scissors')? "You win! Rock beats Scissors":
    (playerSelection==='Paper'&&computerSelection=='Rock')? "You win! Paper beats Rock":
    (playerSelection==='Paper'&&computerSelection=='Scissors')? "You Lose! Scissors beats Paper":
    (playerSelection==='Scissors'&&computerSelection=='Rock')? "You Lose! Rock beats Scissors":
    (playerSelection==='Scissors'&&computerSelection=='Paper')? "You Win! Scissors beats Paper":
    "";

    return message;
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));