class Card {
  constructor(id, question, answers) {
    this.id = id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = 'object';
  }
}

module.exports = Card;
