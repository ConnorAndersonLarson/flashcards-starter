const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function () {

  it('should be an instance of Deck', function() {
    const deck = new Deck;
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should initialize with an array of card objects', function() {
    const card1 = new Card(1, 'What is your name?', ['Sir Lancelot', 'Sir Galahad', 'King Arthur'], 'Sir Lancelot');
    const card2 = new Card(2, 'What is your quest?', ['To go to the store', 'To eat cheese', 'I seek the Grail'], 'I seek the Grail');
    const card3 = new Card(3, 'What is your favorite color?', ['Blue', 'Yellow', 'Red'], 'Yellow');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards.length).to.deep.equal(3);
  });

  it('should be able to return the amount of card objects', function() {
    const card1 = new Card(1, 'What is your name?', ['Sir Lancelot', 'Sir Galahad', 'King Arthur'], 'Sir Lancelot');
    const card2 = new Card(2, 'What is your quest?', ['To go to the store', 'To eat cheese', 'I seek the Grail'], 'I seek the Grail');
    const card3 = new Card(3, 'What is your favorite color?', ['Blue', 'Yellow', 'Red'], 'Yellow');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.deep.equal(3);
  });

});
