function computerPlay(){
    const choice = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

function playerPlay(){
    let playerChoice = prompt('Rock, Paper, or Scissors?')
    playerChoice = playerChoice.charAt(0).toUpperCase()
    + playerChoice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection){

}

playerPlay();