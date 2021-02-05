# FlashCards

## Abstract  
Create a terminal-based flashcard game while utilizing Test-Driven-Design (TDD). Class tests were constructed before each class was created, working up from `card`, `deck`, `turn`, `round`, and `game` before being implemented into a pre-written `index.js` file. This project helped show the benefits of TDD and the efficiency it can bring to writing code. The final `game.js` and `game-test.js` also helped shed light on why it is 'best-practice' but not always utilized be developers, as it was a stumbling block for pure TDD and the quality of the tests reflect the combination of unknown code and time crunch and how it can be the major opponent to best-practice.  

Given more time I would go back and improve the `game-test.js`, as well as refactor `card.js` to take in an object rather than multiple strings, as that became a system that added more lines into my final `game.js`.  

## Contributors ##

* [Connor Anderson-Larson](https://github.com/ConnorAndersonLarson)

## Languages Used ##

* JavaScript

### Resources Used  

* Chai Expect API

## Opening the Program  
Clone the repo to your terminal, cd into the file, and run node `index.js`.  

## Project Details  
GamePlay  
<img src="/.github/start-flashcards.gif">  

EndGame  
<img src="/.github/end-flashcards.gif">
