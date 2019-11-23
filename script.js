
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
	let player1 = cards.splice(0, 26)
	let player2 = cards.splice(0, 26)

	Play(player1, player2)
}




function Play(player1, player2) {
	this.player1deck = player1
	this.player2deck = player2

	let player1card = player1deck.shift()
	let player2card = player2deck.shift()

	if (player1card.value > player2card.value) {
		player1deck.push(player1card, player2card)
		console.log("Player 1 played " + player1card.rank + " of " + player1card.suit + ", and now has " + player1deck.length + " cards")
		console.log("Player 2 played " + player2card.rank + " of " + player2card.suit + ", and now has " + player2deck.length + " cards")
		console.log("Player 1 wins round")
	} else if (player1card.value < player2card.value) {
		player2deck.push(player1card, player2card)
		console.log("Player 1 played " + player1card.rank + " of " + player1card.suit + ", and now has " + player1deck.length + " cards")
		console.log("Player 2 played " + player2card.rank + " of " + player2card.suit + ", and now has " + player2deck.length + " cards")
		console.log("Player 2 wins round")
	}
}









let deck1 = new Deck



















		// else if (player1card === player2card) {
		// 	let player1down = player1deck.splice(0, 2)
		// 	let player2down = player2deck.splice(0, 2)

		// 	let player1war = player1deck.shift()
		// 	let player2war = player2deck.shift()

		// 	if (player1war > player2war) {
		// 		player1empty.unshift(player1down, player2down, player1card, player2card)
		// 		console.log("Player 1 wins round")
		// 	} else if (player1card < player2card) {
		// 		player2empty.unshift(player1down, player2down, player1card, player2card)
		// 		console.log("Player 2 wins round")
		// 	}
		// }







