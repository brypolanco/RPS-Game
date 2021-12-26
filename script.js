function computerPlay(){
    const choice = ['Rock','Paper','Scissors'];
    const compChoice = Math.floor(Math.random()*choice.length);
    return choice[compChoice];
}

computerPlay();