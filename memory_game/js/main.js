console.log("Up and running!");

var cards = ["King","Queen","King","Queen"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log ("User FLipped " + cardsInPlay[0]);

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log ("User FLipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {

	if (cardOne === cardTwo)
		{console.log ("You got a match, you win!");}
	else
		{console.log ("Please try again!");}
};
