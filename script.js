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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') { 
                humanScore += 1 
                resultRoundMessage('You won! Rock beats Scissors', humanScore, computerScore)
            } else if (computerChoice === 'rock') {
                resultRoundMessage('Draw!', humanScore, computerScore)
            } else if (computerChoice === 'paper') {
                computerScore += 1
                resultRoundMessage('You lose! Paper beats Rock', humanScore, computerScore)
            };
        } else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore += 1
                resultRoundMessage('You won! Paper beats Rock', humanScore, computerScore)
            } else if (computerChoice === 'paper') {
                resultRoundMessage('Draw!', humanScore, computerScore)
            } else if (computerChoice === 'scissors') {
                computerScore += 1
                resultRoundMessage('You lose! Scissors beats Paper', humanScore, computerScore)
            };
        } else if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                humanScore += 1
                resultRoundMessage('You won! Scissors beats Paper', humanScore, computerScore)
            } else if (computerChoice === 'scissors') {
                resultRoundMessage('Draw!', humanScore, computerScore)
            } else if (computerChoice === 'rock') {
                computerScore += 1
                resultRoundMessage('You lose! Rock beats Scissors', humanScore, computerScore)
            };
        };
    };

    function resultRoundMessage(textMessage, humanScore, computerScore) { 
        const content = document.querySelector('.content');
        const message = document.createElement('div');
        message.textContent = `${textMessage} ${humanScore}:${computerScore}`;
        
        content.appendChild(message)

        if (humanScore === 5) {
            return resultGameMessage('User won!')
        }

        if (computerScore === 5) {
            return resultGameMessage('Computer won!')
        }
    };

    function resultGameMessage(textMessage) { 
        const content = document.querySelector('.content');
        const message = document.createElement('h1');
        message.style.color = 'blue'
        message.textContent = textMessage;
            
        content.appendChild(message)
        humanScore = 0;
        computerScore = 0;
    }
    
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');

    rock.addEventListener('click', () => 
        (playRound('rock', getComputerChoice())));
    paper.addEventListener('click', () => 
        (playRound('paper', getComputerChoice())))
    scissors.addEventListener('click', () => 
        (playRound('scissors', getComputerChoice())))
};

playGame()