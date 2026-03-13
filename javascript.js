function getComputerChoice() {
    if (Math.random() >= 0 && Math.random() < 1/3)
        return 'rock'
    else if (Math.random() >= 1/3 && Math.random() < 2/3)
        return 'paper'
    else
        return 'scissors'
}

function getHumanChoice() {
    let userInput = prompt("Rock / Paper / Scissors")
    return userInput.toLowerCase()
}

humanScore = 0
computerScore = 0

function playRound(humanChoice,computerChoice) {
    if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')) {
        humanScore +=
        console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    } 
    
    else if (humanChoice == computerChoice) {
        console.log(`Tie`)
    }
    
    else {
        computerScore +=
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`)
    }

}

console.log (playRound(getHumanChoice(),getComputerChoice()))
console.log ('Human: ' + humanScore + '\nComputer: ' + computerScore)