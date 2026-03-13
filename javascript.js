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
        humanScore ++
        alert(`You won! ${humanChoice} beats ${computerChoice}`)
    } 
    
    else if (humanChoice == computerChoice) {
        alert(`Tie`)
    }
    
    else {
        computerScore++
        alert(`You lost! ${computerChoice} beats ${humanChoice}`)
    }

}

while (true) {
    playRound(getHumanChoice(),getComputerChoice())
    alert(`Human: ${humanScore}\nComputer: ${computerScore}`)
    if (computerScore == 5){
        alert("Computer wins!")
        break
    }else if (humanScore == 5) {
        alert("Human wins!")
        break
    }
}