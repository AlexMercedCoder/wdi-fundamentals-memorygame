console.log("Up and running!");

var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
},

];

var cardsInPlay = [];

function flipCard (card)
{
	cardID = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardID].cardImage);
	cardsInPlay.push(cards[cardID].rank);
	checkForMatch();

	
};

function checkForMatch ()
{

	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1])
		{alert ("You got a match, you win!");}
	else
		{alert ("Please try again!");}
		};
};


function createBoard () {

	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    var reset = document.getElementById('reset');
    reset.addEventListener ('click', resetBoard);
    cardElement.addEventListener ('click', flipCard);
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    document.getElementById("game-board").appendChild(cardElement);
	}
};

function resetBoard () {

	
	cardsInPlay.pop();
	cardsInPlay.pop();
	var x = document.getElementById('game-board');
	x.innerHTML = " ";
	createBoard();
    
};


createBoard();


