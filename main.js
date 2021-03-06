/*
 * Create a list that holds all of your cards
 */

var cards = [
  "fa fa-diamond",
  "fa fa-diamond",
  "fa fa-anchor",
  "fa fa-anchor"
]


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */


var shuffledCards = shuffle(cards);

var cardlist = document.querySelectorAll('i');

for (var i = 0; i < cardlist.length; i++) {
  cardlist[i].className = shuffledCards[i];
}



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

var openCards = [];
var emptyList = [];

var card = document.querySelectorAll('.card');
var clickedCard;

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('click', show);
}



function show() {
  this.className += " open show";
  putCards(this);
  clickedCard = this;
  if (openCards.length == 2) {
    console.log(openCards);
    if (openCards[0].querySelector('i').className == openCards[1].querySelector('i').className) {
      match();
    } else {
      dontmatch();
    }
  }
};


function putCards(card) {
  openCards.push(card);
};

function match() {
  for (var i = 0; i < openCards.length; i++) {
    console.log(openCards[i]);
    console.log(openCards[i].className);
  openCards[i].className = "card match";
  console.log(openCards[i]);
  console.log(openCards[i].className);;
}
  console.log('match');
}


function dontmatch() {
  for (var i = 0; i < openCards.length; i++) {
    openCards[i].className = "card";
  }
  console.log('dontmatch');
  openCards = emptyList;
  console.log(openCards);
}


function checkAll() {

}











// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
