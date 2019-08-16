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

function flipCard (cardId)
{

	console.log ("User flipped a " + cards[cardId].rank);
	console.log ("Suit " + cards[cardId].suit);
	console.log ("Image " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();

	
};

function checkForMatch ()
{

	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1])
		{console.log ("You got a match, you win!");}
	else
		{console.log ("Please try again!");}
};

}

flipCard(0);
flipCard(2);


