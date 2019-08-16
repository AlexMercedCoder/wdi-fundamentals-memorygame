console.log("Up and running!");

var cards = ["King","Queen","King","Queen"];

var cardsInPlay = [];

function flipCard (cardId)
{

	console.log ("User flipped a " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
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


