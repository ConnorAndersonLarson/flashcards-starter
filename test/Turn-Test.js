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

  it.skip('should return a stated guess', function() {
    const card = new Card (1, 'What is your favorite color?', ['Blue', 'Yellow', 'Blu-I mean Yellowww!'], 'Yellow')
    const turn = new Turn ('Blu-I mean Yellowww!', card)
    expect(turn.returnGuess()).to.deep.equal('Blu-I mean Yellowww!');
  })

  it.skip('should return a given card', function() {
    const card = new Card (1, 'By what name are you known?', ['The Great Magician', 'Merlin the Powerful', 'Tim'], 'Tim')
    const turn = new Turn ('Tim', card)
    expect(turn.returnCard()).to.deep.equal(card);
  })

  it.skip('should return a boolean based on legitimacy of the given answer', function() {
    const card = new Card (1, 'What do the knights say?', ['ni', 'en garde', "Ekki-Ekki-Ekki-Ekki-PTANG. Zoom-Boing. Z'nourrwringmm"], 'ni')
    const turn1 = new Turn ('en garde', card)
    const turn2 = new Turn ('ni', card)
    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
  });

  it.skip('Should give feedback based on if the given answer is true or false', function() {
    const card = new Card (1, 'When should the Holy Hand Grenade be thrown?', ['Three', 'One', 'Five'], 'Three');
    const turn1 = new Turn ('Three', card);
    const turn2 = new Turn ('Five', card);
    expect(turn1.giveFeedback()).to.deep.equal('correct!')
    expect(turn2.giveFeedBack()).to.deep.equal('incorrect!')
  })

})
