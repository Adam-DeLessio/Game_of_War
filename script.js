const player1deck = []
const player2deck = []

// const player1empty = []
// const player2empty = []

// let player1card = player1deck.shift()
// let player2card = player2deck.shift()





class Game {
	constructor() {
		this.player1deck: []
		this.player2deck: []
	}

	card() {
		constructor(rank, suit, value) {
			this.rank = rank
			this.suit = suit
			this.value = value
		}
	}

	deck() {
		constructor() {
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
		}
	}

	shuffle() {
		constructor() {

		}
	}

	deal() {
		constructor() {
		
		}
	}

	play() {
		constructor() {

		}
	}

}



class Round {
	constructor(player1card, player2card) {
		this.player1card = player1card
		this.player2card = player2card

		if (player1card > player2card) {
			player1empty.unshift(player1card, player2card)
			console.log("Player 1 wins round")
		} else if (player1card < player2card) {
			player2empty.unshift(player1card, player2card)
			console.log("Player 2 wins round")
		} else if (player1card === player2card) {
			let player1down = player1deck.splice(0, 2)
			let player2down = player2deck.splice(0, 2)

			let player1war = player1deck.shift()
			let player2war = player2deck.shift()

			if (player1war > player2war) {
				player1empty.unshift(player1down, player2down, player1card, player2card)
				console.log("Player 1 wins round")
			} else if (player1card < player2card) {
				player2empty.unshift(player1down, player2down, player1card, player2card)
				console.log("Player 2 wins round")
			}
		}
	}
}

const deck = new Deck()




while (player1deck.length < 26) {
	let random = Math.floor(Math.random() * 52) + 1;
	if (player1deck.indexOf(random) === -1) {
		player1deck.push(deck.cards[random]);
	}
}

console.log(player1deck)






















