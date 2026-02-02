function getComputerChoice() {
    const getRandomNum = Math.random()
    if (getRandomNum < 1/3) {
        return 'Rock'
    } else if (getRandomNum < 2/3) {
        return 'Paper'
    } else {
        return 'Scissors'
    }  
}

console.log(getComputerChoice())