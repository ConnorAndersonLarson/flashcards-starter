const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Round', function() {
  const card1 = new Card(1, 'What is your name?', ['Sir Lancelot', 'Sir Galahad', 'King Arthur'], 'Sir Lancelot');
  const card2 = new Card(2, 'What is your quest?', ['To go to the store', 'To eat cheese', 'I seek the Grail'], 'I seek the Grail');
  const card3 = new Card(3, 'What is your favorite color?', ['Blue', 'Yellow', 'Red'], 'Yellow');
  const deck = new Deck([card1, card2, card3]);

  describe('Attributes', function() {
    it('should store a deck', function() {
      const round = new Round(deck)
      expect(round.deck.cards).to.deep.equal([card1, card2, card3])
    })

    it('should store a turn counter', function() {
      const round = new Round(deck)
      expect(round.turns).to.deep.equal(0)
    })

    it('should store a list of incorrect guesses', function() {
      const round = new Round(deck)
      expect(round.incorrectGuesses).to.deep.equal([])
    })
  })

  describe('takeTurn', function() {
    xit('should instantiate a new turn', function() {
      const round = new Round(deck)
      expect(round.takeTurn()).to.be.an.instanceof(Turn)
    })

    xit('should update turn counter at the end of a turn', function() {
      const round = new Round(deck)
      round.takeTurn()
      expect(round.turns).to.deep.equal(1)
    })

    xit('should turn the next card into the current card', function() {
      const round = new Round(deck)
      round.takeTurn('Sir Lancelot')
      expect(round.returnCurrentCard()).to.deep.equal(card2)
    })

    xit('should store incorrect guesses in an array', function() {
      const round = new Round(deck)
      round.takeTurn('King Arthur')
      expect(round.incorrectGuesses[0]).to.deep.equal(card1)
    })

    xit('should return feedback after given an answer', function() {
      const round = new Round(deck)
      expect(round.takeTurn('Sir Lancelot')).to.deep.equal('correct!')
      expect(round.takeTurn('To go to the store')).to.deep.equal('incorrect!')
    })
  })

  describe('Other Methods', function() {

    xit('should return the current card being played', function() {
      const round = new Round(deck)
      expect(round.returnCurrentCard()).to.deep.equal(card1)
      round.takeTurn('SirLancelot')
      expect(round.returnCurrentCard()).to.deep.equal(card2)
    })

    xit('should return percentage of correct guesses', function() {
      const round = new Round(deck)
      round.takeTurn('SirLancelot')
      round.takeTurn('To eat cheese')
      round.takeTurn('Yellow')
      expect(round.calculatePercentCorrect()).to.equal(66.6)
    })

    xit('should return a message at end of round', function() {
      const round = new Round(deck)
      round.takeTurn('SirLancelot')
      round.takeTurn('I seek the Grail')
      round.takeTurn('Yellow')
      expect(round.endRound()).to.deep.equal('** Round over! ** You answered 100% of the questions correctly!')
    })
  })
})
