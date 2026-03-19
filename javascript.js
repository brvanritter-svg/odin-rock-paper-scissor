function getComputerChoice() {
    if (Math.random() >= 0 && Math.random() < 1/3)
        return 'rock'
    else if (Math.random() >= 1/3 && Math.random() < 2/3)
        return 'paper'
    else
        return 'scissors'
}

const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissor-button');
const alert = document.createElement('p');
const body = document.querySelector('body');
const para2 = document.createElement('p');


humanScore = 0
computerScore = 0

function playRound(humanChoice,computerChoice) {


    
    if ((humanChoice == 'rock' && computerChoice == 'scissors') 
        || (humanChoice == 'scissors' && computerChoice == 'paper') 
        || (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanScore ++
        alert.textContent =`You won! ${humanChoice} beats ${computerChoice}`
    } 
    
    else if (humanChoice == computerChoice) {
        alert.textContent =`Tie`
    }
    
    else {
        computerScore++
        alert.textContent =`You lost! ${computerChoice} beats ${humanChoice}`
    }
    body.appendChild(alert);

    para2.textContent = `Computer score: ${computerScore} Your score: ${humanScore}`;
    body.appendChild(para2);
    
}



rock.addEventListener('click', () => playRound('rock',getComputerChoice()));
paper.addEventListener('click', () => playRound('paper',getComputerChoice()));
scissors.addEventListener('click', () => playRound('scissors',getComputerChoice()));
