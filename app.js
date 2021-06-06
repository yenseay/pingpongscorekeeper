const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1DisplayedScore')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2DisplayedScore')
}

const resetButton = document.querySelector('#reset');
const scoreToSelected = document.querySelector('#scoreto');

let winningScore = 3;
let isGameOver = false;

scoreToSelected.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    // Here we cannot simply update with what we get from select
    // This is because the select will be a string, so we need to parseInt
    reset();
})


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', function() {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function() {
    updateScores(p2, p1)
})

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of[p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}