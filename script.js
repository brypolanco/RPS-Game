function computerPlay(){
    const choice = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

function playRound(playerSelection, computerSelection){
    let message = '';
    //console.log(playerSelection);

    if (playerSelection===computerSelection){
        message = "It's a tie! You both chose " + playerSelection;
    }

    else if(playerSelection==='Rock'&&computerSelection=='Paper'){
        message = "You Lose! Paper beats Rock";
        //computerScore++;
    }

    else if(playerSelection==='Rock'&&computerSelection=='Scissors'){
        message = "You Win! Rock beats Scissors";
        //playerScore++;
    }

    else if(playerSelection==='Paper'&&computerSelection=='Rock'){
        message = "You win! Paper beats Rock";
        //playerScore++;
    }

    else if(playerSelection==='Paper'&&computerSelection=='Scissors'){
        message = "You Lose! Scissors beats Paper";
        //computerScore++;
    }

    else if(playerSelection==='Scissors'&&computerSelection=='Rock'){
        message = "You Lose! Rock beats Scissors";
        //computerScore++;
    }

    else if(playerSelection==='Scissors'&&computerSelection=='Paper'){
        message = "You Win! Scissors beats Paper";
        //playerScore++;
    }

    else{
        message = "ERROR";
    }
    return message;
}

const btn1 = document.getElementById('rock');
const btn2 = document.getElementById('paper');
const btn3 = document.getElementById('scissors');

function btnClick(value){
    console.log(playRound(value,computerPlay()))
}

btn1.addEventListener("click", () => {btnClick(btn1.value)});
btn2.addEventListener("click", () => {btnClick(btn2.value)});
btn3.addEventListener("click", () => {btnClick(btn3.value)});