let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function playGame(playerMove) {
    const compMove = pickCompMove();
    let res = '';
    if (playerMove === 'scissors') {
        if (compMove === 'rock')
            res = 'lose';
        else if (compMove === 'paper')
            res = 'win';
        else if (compMove === 'scissors')
            res = 'have tied';
    }

    else if (playerMove === 'paper') {
        if (compMove === 'rock')
            res = 'win';
        else if (compMove === 'paper')
            res = 'have tied';
        else if (compMove === 'scissors')
            res = 'lose';
    }

    else if (playerMove === 'rock') {
        if (compMove === 'rock')
            res = 'have tied';
        else if (compMove === 'paper')
            res = 'lose';
        else if (compMove === 'scissors')
            res = 'win';
    }


    document.querySelector('.js-moves').innerHTML = `YOU
    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${playerMove}-emoji.png" alt="">
    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${compMove}-emoji.png" alt="">
    COMPUTER`;

    if (res === 'win') {
        document.querySelector('.js-result').innerHTML = 'You Win!';
        score.wins++;
    }
    else if (res === 'lose') {
        document.querySelector('.js-result').innerHTML = 'You Lose!';
        score.losses++;
    }
    else if (res === 'have tied') {
        document.querySelector('.js-result').innerHTML = 'Tie!';
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins}   Losses : ${score.losses}   Ties : ${score.ties}`;
}

function resetGame() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = '';
    document.querySelector('.js-moves').innerHTML = 'START GAME';
    updateScoreElement();
}

function pickCompMove() {
    const randomNumber = Math.random();
    let compMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = 'scissors';
    }
    return compMove;
}