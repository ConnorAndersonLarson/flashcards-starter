const chai = require('chai');
const expect = chai.expect;


const Game = require('../src/Game');


describe('Game', function() {

  it('should keep track of current round', function() {
    const game = new Game();
    expect(game.currentRound()).to.deep.equal(game.round)
  })

  describe('Start', function() {
    it('should create cards and put them in the deck', function() {
      const game = new Game()
      game.start()
      console.log(game.currentRound())
      expect((game.currentRound()).deck.cards.length).to.deep.equal(30)
    })

    it('should create a new round using deck', function() {
      const game = new Game()
      game.start()
      expect((game.currentRound()).deck).to.deep.equal(game.deck)
    })

    it('should invoke PrintMessage', function() {
      const game = new Game()
      game.start()
    })

    it('should invoke printQuestion', function() {
      const game = new Game()
      game.start()
    })

  })

})
