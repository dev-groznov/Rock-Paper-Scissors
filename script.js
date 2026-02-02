function getComputerChoice() {
    const getRandomNum = Math.random()
    if (getRandomNum < 1/3) {
        return 'rock'
    } else if (getRandomNum < 2/3) {
        return 'paper'
    } else {
        return 'scissors'
    }  
};

function getHumanChoice() {
    return prompt('Choose "rock", "paper" or "scissors"')
};

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                console.log('You won! Rock beats Scissors')
                humanScore += 1
            } else if (computerChoice === 'rock') {
                console.log('Draw!')
            } else if (computerChoice === 'paper') {
                console.log('You lose! Paper beats Rock')
                computerScore += 1
            };
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log('You won! Paper beats Rock')
                humanScore += 1
            } else if (computerChoice === 'paper') {
                console.log('Draw!')
            } else if (computerChoice === 'scissors') {
                console.log('You lose! Scissors beats Paper')
                computerScore += 1
            };
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                console.log('You won! Scissors beats Paper')
                humanScore += 1
            } else if (computerChoice === 'scissors') {
                console.log('Draw!')
            } else if (computerChoice === 'rock') {
                console.log('You lose! Rock beats Scissors')
                computerScore += 1
            };
        };
    };

    for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    }
    
    if (humanScore > computerScore) {
        console.log('You won this game :)')
    } else if (humanScore === computerScore) {
        console.log('Draw! No one won :/')
    } else {
        console.log('You lost this game :(')
    }
}

playGame()