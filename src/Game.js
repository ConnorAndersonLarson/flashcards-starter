const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.deck = [];
    this.round = {};
  }

  currentRound() {
    return this.round;
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(dataSet => {
      const card = new Card(
        dataSet.id, dataSet.question, dataSet.answers,
        dataSet.correctAnswer
      );
      cards.push(card);
    })
    this.deck = new Deck(cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
