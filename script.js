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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log('You won! Rock beats Scissors')
        } else if (computerChoice === 'rock') {
            console.log('Draw!')
        } else if (computerChoice === 'paper') {
            console.log('You lose! Paper beats Rock')
        };
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You won! Paper beats Rock')
        } else if (computerChoice === 'paper') {
            console.log('Draw!')
        } else if (computerChoice === 'scissors') {
            console.log('You lose! Scissors beats Paper')
        };
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('You won! Scissors beats Paper')
        } else if (computerChoice === 'scissors') {
            console.log('Draw!')
        } else if (computerChoice === 'rock') {
            console.log('You lose! Rock beats Scissors')
        };
    };
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);