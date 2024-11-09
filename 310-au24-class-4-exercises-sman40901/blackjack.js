function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const blackjackDeck = getDeck();
//  console.log(blackjackDeck)
// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
class CardPlayer {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    drawCard = () => {
        const randomIndex = getRandomInt(1, 52);
        this.hand.push(blackjackDeck[randomIndex - 1]);
        // console.log(this.hand);
    }
}

// // CREATE TWO NEW CardPlayers
const dealer = new CardPlayer('dealer'); // TODO
const player = new CardPlayer('player'); // TODO

// player.drawCard();

// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
const calcPoints = (hand) => {
    let tot = 0;
    let countAce = 0;
    let remainAce = 0;
    let soft = false;
    // console.log(hand)
    for (let i = 0; i < hand.length; i++) {
        if (hand[i].val === 11) {
            countAce += 1;
            remainAce += 1;
            soft = true;
        }
        tot += hand[i].val;
    }
    // checking if there are more than 1 ace in the hand
    if (countAce > 1) {
        tot = tot - ((countAce - 1) * 11) /* substract all aces except 1 */ + (countAce - 1); /* add 1 points for each ace except 1*/
        remainAce = 1; // 1 ace remains
        soft = true; // at least 1 ace is being counted as 11;
    }

    // checking if total is over 21 and at least 1 ace remains, then change that ace to 1 from 11
    if (remainAce == 1 && tot > 21) {
        tot = tot - 11 + 1;
        remainAce = 0;
    }

    // checking if hand has no ace, if hand had an ace countAce would be at least 1
    //or
    // checking if hand had at least 1 ace but if remainAce is 0 then all ace was converted to value 1
    if (countAce == 0 || (countAce != remainAce && remainAce == 0)) {
        soft = false;
    }

    const blackJackScore = {
        total: tot,
        isSoft: soft
        // remainAce: remainAce // had to add this to check if dealer has 1 ace evaluated as 11
    }

    return blackJackScore;
}

// /**
//  * Determines whether the dealer should draw another card.
//  *
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
const dealerShouldDraw = (dealerHand) => {
    const { total, isSoft } = calcPoints(dealerHand);
    // 16 points or less, draw
    if (total <= 16) {
        return true;
    }

    // 17 points and dealer has an ace valued at 11, must draw
    if (isSoft && 17 == total) {
        return true;
    }

    // 17 points or more , the dealer will end turn
    return false;

}

// const announceWinner = (winner) => {
//     const w = document.getElementById('showWinner');
//     w.innerHTML = `<h1>winner</h1>`;
// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore
//  * @param {number} dealerScore
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
const determineWinner = (playerScore, dealerScore) => {
    let winner = '';
    // console.log(dealerScore)
    if (dealerScore > 21) {
        winner = 'Player';
    } else if (playerScore < 21 || dealerScore < 21) {
        if (dealerScore == playerScore) {
            winner = 'push';
        } else if (dealerScore > playerScore) {
            winner = 'Dealer';
        } else {
            winner = 'Player';
        }
    }
    winner = `the player's score: ${playerScore}, the dealer's score: ${dealerScore}, and the game goes to ${winner}`;
    // announceWinner(winner)
    return winner;
}

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count
//  * @param {string} dealerCard
//  */
const getMessage = (count, dealerCard) => {
    return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
}

const suitEmoji = (suit) => {
    // let suitImg = '';
    // switch (suit) {
    //     case 'hearts':
    //         return 'heart';
    //     case 'spades':
    //         return '♠️';
    //     case 'diamonds':
    //         return '♦️';
    //     case 'clubs':
    //         return '♣️'
    // }
    return `<img src="${suit}.png" alt="${suit}" width="20" height="20">`
}

const drawHTMLCards = (player) => {
    const name = player.name;
    let cardShowcase = '';
    if (name === 'player') {
        cardShowcase = document.getElementById('playerCards');
    }
    if (name === 'dealer') {
        cardShowcase = document.getElementById('dealerCards');
    }
    cardShowcase.innerHTML=""; // clear all existing child before appending the whole list again 
    // console.log(cardShowcase); // Log to see if cardShowcase is correctly assigned 
    for (let i = 0; i < player.hand.length; i++) {
        const { displayVal, suit } = player.hand[i];
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = displayVal + " " + suitEmoji(suit);
        cardShowcase.appendChild(card);
    }
};

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player
//  */
const showHand = (player) => {
    const displayHand = player.hand.map((card) => card.displayVal);
    console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);

    // extra credit to show card in html file
    drawHTMLCards(player);
}

// /**
//  * Runs Blackjack Game
//  */
const startGame = function () {
    player.drawCard();
    dealer.drawCard();
    player.drawCard();
    dealer.drawCard();

    let playerScore = calcPoints(player.hand).total;

    /*
    If the player gets exactly 21 after drawing her first 2 cards, the player immediately wins
    If the dealer draws exactly 21 after drawing her first 2 cards, the dealer immediately wins
    */
    // extra credit 
    // both player and dealer has 2 cards in there hand at this point
    if (playerScore == 21) {
        showHand(player);
        return 'Player has 21 with 2 cards - you win!';
    }

   
    let dealerScore = calcPoints(dealer.hand).total;
    
    //extra credit
    if (dealerScore == 21) {
        showHand(dealer);
        return 'Dealer has 21 with 2 cards - you lose!';
    }

    showHand(player);
    showHand(dealer); //  I have added so that it shows dealer hand

    while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
        player.drawCard();
        playerScore = calcPoints(player.hand).total;
        showHand(player);
    }
    if (playerScore > 21) {
        return 'You went over 21 - you lose!';
    }
    console.log(`Player stands at ${playerScore}`);

    while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
        dealer.drawCard();
        dealerScore = calcPoints(dealer.hand).total;
        showHand(dealer);
    }
    if (dealerScore > 21) {
        return 'Dealer went over 21 - you win!';
    }
    console.log(`Dealer stands at ${dealerScore}`);

    return determineWinner(playerScore, dealerScore);
}
console.log(startGame())