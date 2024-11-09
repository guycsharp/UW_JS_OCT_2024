/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
/**
 * Returns an array of 52 Cards
 * @returns {Array} deck - a deck of cards
 */
const getDeck = () => {
  const deck = []
  const suits = ['hearts', 'spades', 'clubs', 'diamonds']

  for (let index = 0; index < suits.length; index++) {
    // create an array of 13 objects
    for (let j = 1; j <= 13; j++) {
      // for each loop, push a card object to the deck

      // special cases for when j > 10
      let displayVal = ''
      let val=j;

      // swtich was written with predicates as if it were if conditions
      // value asserstions were wrong
      switch (j) {
        case 1:
          displayVal = 'Ace'
          val = 11;
          break
        case  11:
          displayVal = 'Jack'
          val = 10;
          break
        case 12:
          displayVal = 'Queen'
          val = 10;
          break
        case  13:
          displayVal = 'King'
          val = 10;
          break
        default:
          displayVal = j.toString();
      }

      const card = {
        val: val,
        displayVal: displayVal,
        suit: suits[index],
      }

      deck.push(card)
    }
  }
  return deck;
}

// CHECKS
const deck = getDeck()
console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal} and ${randomCard.val}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit} and ${randomCard.suit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)
