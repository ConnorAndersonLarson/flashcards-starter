const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const turn = new Turn('A guess');
    expect(turn.guess).to.deep.equal('A guess');
  });

  it('should store a card', function() {
    const card = new Card (1, 'What is your quest?', ["I'm not sure", "I seek the Grail", "Yellow"], 'I seek the Grail')
    const turn = new Turn ('I seek the Grail', card)
    expect(turn.card).to.deep.equal(card);
  });

})
