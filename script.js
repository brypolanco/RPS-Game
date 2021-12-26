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



function game(){
    let computerScore = 0;
    let playerScore = 0;

    for(let round = 1; round <= 5; round++){
        function playRound(playerSelection, computerSelection){
            if (playerSelection===computerSelection){
                message = "It's a tie! You both chose " + playerSelection;
            }

            else if(playerSelection==='Rock'&&computerSelection=='Paper'){
                message = "You Lose! Paper beats Rock";
                computerScore++;
            }

            else if(playerSelection==='Rock'&&computerSelection=='Scissors'){
                message = "You Win! Rock beats Scissors";
                playerScore++;
            }

            else if(playerSelection==='Paper'&&computerSelection=='Rock'){
                message = "You win! Paper beats Rock";
                playerScore++;
            }

            else if(playerSelection==='Paper'&&computerSelection=='Scissors'){
                message = "You Lose! Scissors beats Paper";
                computerScore++;
            }

            else if(playerSelection==='Scissors'&&computerSelection=='Rock'){
                message = "You Lose! Rock beats Scissors";
                computerScore++;
            }

            else if(playerSelection==='Scissors'&&computerSelection=='Paper'){
                message = "You Win! Scissors beats Paper";
                playerScore++;
            }


        return message;
        }

    console.log('Round '+round);
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("player score: " +playerScore + " | computer score: " + computerScore);
    }

    const result = (playerScore>computerScore)? "Congrats! You Win The Game!":
    (playerScore<computerScore)? "Sorry! You Lost The Game!":
    "It's a tied game";
    console.log(result);
}

game();