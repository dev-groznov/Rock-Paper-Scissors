function getComputerChoice() {
    const getRandomNum = Math.random()
    if (getRandomNum < 1/3) {
        return 'Rock'
    } else if (getRandomNum < 2/3) {
        return 'Paper'
    } else {
        return 'Scissors'
    }  
};

function getHumanChoice() {
    return prompt('Choose "Rock", "Paper" or "Scissors"')
};

let humanScore = 0;
let computerScore = 0;

console.log(humanScore)
console.log(computerScore)