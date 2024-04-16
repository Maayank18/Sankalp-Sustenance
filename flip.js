const symbols = ['🍎', '🍌', '🍉', '🍇', '🍓', '🍒', '🍍', '🥭', '🥝'];

const container = document.getElementById('game-container');
let firstCard = null;
let secondCard = null;

function createGame() {
    const shuffledSymbols = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

    shuffledSymbols.forEach(symbol => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = '<span class="symbol">' + symbol + '</span>';
        card.addEventListener('click', () => flipCard(card));
        container.appendChild(card);
    });
}

function flipCard(card) {
    if (!firstCard) {
        firstCard = card;
        firstCard.classList.add('flipped');
    } else if (card !== firstCard && !secondCard) {
        secondCard = card;
        secondCard.classList.add('flipped');
        checkMatch();
    }
}

function checkMatch() {
    const symbol1 = firstCard.querySelector('.symbol').textContent;
    const symbol2 = secondCard.querySelector('.symbol').textContent;

    if (symbol1 !== symbol2) {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetCards();
        }, 1000);
    } else {
        resetCards();
    }
}

function resetCards() {
    firstCard = null;
    secondCard = null;
}

createGame();