
function Deck() {
	this.cards = []

	const ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"]
	const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

	for (let i = 0; i < ranks.length; i++) {
		for (let j = 0; j < suits.length; j++) {
			let rank = ranks[i]
			let suit = suits[j]
			let value = i;

		this.cards.push(new Card(rank, suit, value))
		}
	}
	Shuffle(this.cards)
}

function Card(rank, suit, value) {
	this.rank = rank
	this.suit = suit
	this.value = value
}

function Shuffle(cards) {
	this.cards = []

	for (let i = cards.length - 1; i >= 0; i--) {
		let j = Math.floor(Math.random() * i);
		let k = cards[i]
		cards[i] = cards[j]
		cards[j] = k

		this.cards.push(cards[i])
	}
	Deal(this.cards)
}

function Deal(cards) {
	let player1deck = cards.splice(0, 26)
	let player2deck = cards.splice(0, 26)

	Play(player1deck, player2deck)
}


function Play(player1deck, player2deck) {
	this.player1deck = player1deck
	this.player2deck = player2deck


	let player1card = player1deck.shift()
	let player2card = player2deck.shift()

	let player1warStack = []
	let player2warStack = []

	console.log("Player 1 played " + player1card.rank + " of " + player1card.suit)
	console.log("Player 2 played " + player2card.rank + " of " + player2card.suit)
	if (player1card.value > player2card.value) {
		player1deck.push(player1card, player2card)
		console.log("Player 1 wins round")
		console.log("Player 1 now has " + player1deck.length + " cards")
		console.log("Player 2 now has " + player2deck.length + " cards")
		Play(player1deck, player2deck)
	} else if (player1card.value < player2card.value) {
		player2deck.push(player1card, player2card)
		console.log("Player 2 wins round")
		console.log("Player 1 now has " + player1deck.length + " cards")
		console.log("Player 2 now has " + player2deck.length + " cards")
		Play(player1deck, player2deck)
	} else if (player1card.value === player2card.value) {
		console.log("War!")
		war(player1card, player2card, player1deck, player2deck, player1warStack, player2warStack)
	}
}





function war(player1card, player2card, player1deck, player2deck, player1warStack, player2warStack) {
	this.player1card = player1card
	this.player2card = player2card
	this.player1deck = player1deck
	this.player2deck = player2deck
	this.player1warStack = player1warStack
	this.player2warStack = player2warStack

		player1warStack = player1deck.splice(0, 3)
		player2warStack = player2deck.splice(0, 3)

		player1warStack.push(player1card)
		player2warStack.push(player2card)

		player1card = player1deck.shift()
		player2card = player2deck.shift()

		console.log("Player 1 played " + player1card.rank + " of " + player1card.suit)
		console.log("Player 2 played " + player2card.rank + " of " + player2card.suit)
		if (player1card.value > player2card.value) {
			player1deck.push(player1card, player2card)

			for (let i = 0; i < player1warStack.length; i++) {
				player1deck.push(player1warStack[i])
			}
			for (let i = 0; i < player2warStack.length; i++) {
				player1deck.push(player2warStack[i])
			}

			console.log("Player 1 wins round")
			console.log("Player 1 now has " + player1deck.length + " cards")
			console.log("Player 2 now has " + player2deck.length + " cards")
			Play(player1deck, player2deck)
		} else if (player1card.value < player2card.value) {
			player2deck.push(player1card, player2card)

			for (let i = 0; i < player1warStack.length; i++) {
				player2deck.push(player1warStack[i])
			}
			for (let i = 0; i < player2warStack.length; i++) {
				player2deck.push(player2warStack[i])
			}

			console.log("Player 2 wins round")
			console.log("Player 1 now has " + player1deck.length + " cards")
			console.log("Player 2 now has " + player2deck.length + " cards")
			Play(player1deck, player2deck)
		} else if (player1card.value === player2card.value) {
			console.log("Player 1 played " + player1war.rank + " of " + player1war.suit)
			console.log("Player 2 played " + player2war.rank + " of " + player2war.suit)
			console.log("War Again!")
			war(player1card, player2card, player1deck, player2deck, player1warStack, player2warStack)
		}
	}







let deck1 = new Deck





/// Code for tie breaker without WAR

	// } else if (player1card.value === player2card.value) {
	// 	player1deck.push(player1card)
	// 	player2deck.push(player2card)
	// 	console.log("Draw")
	// 	console.log("Player 1 played " + player1card.rank + " of " + player1card.suit + ", and now has " + player1deck.length + " cards")
	// 	console.log("Player 2 played " + player2card.rank + " of " + player2card.suit + ", and now has " + player2deck.length + " cards")
	// }



