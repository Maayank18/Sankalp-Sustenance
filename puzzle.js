// Define an array of objects with questions and solutions
var cardsData = [
    { question: '5 + 3', solution: '8' },
    { question: '10 - 4', solution: '6' },
    { question: '7 + 2', solution: '9' },
    { question: '9 - 6', solution: '3' },
    { question: '2 + 6', solution: '8' },
    { question: '8 - 2', solution: '6' },
    { question: '3 + 4', solution: '7' },
    { question: '6 - 3', solution: '3' },
    { question: '4 + 5', solution: '9' }
];

function flipCard(card) {
    if (card.classList.contains('flipped')) return; // prevent flipping twice

    var index = card.dataset.index;
    var data = cardsData[index];

    card.querySelector('.front').textContent = data.question;
    card.querySelector('.back').textContent = data.solution;

    card.classList.add('flipped');
}

// Shuffle cardsData array
cardsData = shuffle(cardsData);

// Generate cards dynamically
var container = document.querySelector('.container');
for (var i = 0; i < 9; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.dataset.index = i;
    container.appendChild(card);
}

// Utility function to shuffle array
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}