const cardRank = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King',
];

const cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];

let players = [
  {
    name: 'Aaron',
    hand: [],
  },
  {
    name: 'Freyja',
    hand: [],
  },
  {
    name: 'Bill',
    hand: [],
  },
  {
    name: 'Candice',
    hand: [],
  },
];

function createDeck() {
  const newDeck = [];
  for (const r of cardRank) {
    for (const s of cardSuit) {
      newDeck.push({
        rank: r,
        suit: s,
      });
    }
  }
  return newDeck;
}

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

function addPlayerCards(player) {
  let score = 0;
  for (let i = 0; i < 2; i++) {
    if (player['hand'][i]['rank'] === 'Ace') {
      score += 11;
    } else if (player['hand'][i]['rank'] === '2') {
      score += 2;
    } else if (player['hand'][i]['rank'] === '3') {
      score += 3;
    } else if (player['hand'][i]['rank'] === '4') {
      score += 4;
    } else if (player['hand'][i]['rank'] === '5') {
      score += 5;
    } else if (player['hand'][i]['rank'] === '6') {
      score += 6;
    } else if (player['hand'][i]['rank'] === '7') {
      score += 7;
    } else if (player['hand'][i]['rank'] === '8') {
      score += 8;
    } else if (player['hand'][i]['rank'] === '9') {
      score += 9;
    } else if (player['hand'][i]['rank'] === '10') {
      score += 10;
    } else if (player['hand'][i]['rank'] === 'Jack') {
      score += 10;
    } else if (player['hand'][i]['rank'] === 'Queen') {
      score += 10;
    } else if (player['hand'][i]['rank'] === 'King') {
      score += 10;
    }
  }
  return score;
}

function cardGame(players, numCards) {
  shuffle(cardDeck);
  while (winnerExists === false) {
    for (let j = 0; j < numCards; j++) {
      for (const player of players) {
        player.hand.push(cardDeck[cardCounter]);
        cardCounter++;
        if (cardCounter === 52) {
          shuffle(cardDeck);
          cardCounter = 0;
        }
      }
    }

    let results = [];

    for (let i = 0; i < players.length; i++) {
      results.push({
        name: players[i]['name'],
        score: addPlayerCards(players[i]),
      });
      console.log(results[i].name + "'s Score: " + results[i].score);
    }

    for (let i = 0; i < 2; i++) {
      for (let i = 0; i < results.length - 1; i++) {
        if (results[i].score > results[i + 1].score) {
          [results[i], results[i + 1]] = [results[i + 1], results[i]];
        }
      }
    }

    if (
      results[results.length - 2].score === results[results.length - 1].score
    ) {
      console.log("It's a tie!");
      players = [
        {
          name: results[results.length - 2].name,
          hand: [],
        },
        {
          name: results[results.length - 1].name,
          hand: [],
        },
      ];
      winnerExists = false;
    } else {
      console.log('The winner is:', results[results.length - 1].name);
      winnerExists = true;
    }
  }
}

// Game Setup
const numCards = 2; // prompt('Please enter the number of cards per hand');
let cardDeck = createDeck();
let winnerExists = false;
let cardCounter = 0;

// Play the Game
cardGame(players, numCards);
