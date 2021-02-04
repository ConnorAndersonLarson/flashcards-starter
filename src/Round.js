const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard())
    }else{
      this.deck.cards.shift()
    }
    return(turn.giveFeedback())
  }


}

module.exports = Round;
