var a = [1,2,3,4,5,6]

console.log(Array.isArray(a));


var shuffledCards = shuffle(cards);

var deck = document.createElement('ul')
deck.className = 'deck';


for (var i = 0; i < shuffledCards.length; i++) {
  var item = document.createElement('i');
  item.className = shuffledCards[i];
  var list = document.createElement('li');
  list.className = "card";
  list.append(item);
  console.log(list);
  deck.append(list);
}

console.log(deck);
