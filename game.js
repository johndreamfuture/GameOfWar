class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor() {
    this.length = 52;
    this.cards = this.createCards();
  }
  createCards() {
    let suits = ["hearts", "spades", "clubs", "diamands"]
    let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"]
    let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let cards = []
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        cards.push(new Card(suits[i], ranks[j], j + 1))
      }
    }
    return cards
  }
}
let deck = new Deck()
//console.log(deck.cards.length
class player {
  constructor(name) {
    this.name = name
    this.cardsOfPlayer = []
  }

}
//
class Game {
  constructor() {
    this.cards = new Deck().cards

    this.playerOne = new player("Jack")
    this.playerTwo = new player("Lucy")
  }
  washCards() {

    for (let i = this.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i)
      let k = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = k
    }
  }
  distribute() {
    for (let i = 1; i < 27; i++) {
      this.playerOne.cardsOfPlayer.push(this.cards.pop())
      this.playerTwo.cardsOfPlayer.push(this.cards.pop())
    }
  }

  play() {
    let flag = (this.playerOne.cardsOfPlayer.length > 0) && (this.playerTwo.cardsOfPlayer.length > 0)
    let box = []
    let i = 0


    while (flag) {
      i++
      console.log("look! " + i + " round will begin!")
      let cardOne = this.playerOne.cardsOfPlayer.pop()
      let cardTwo = this.playerTwo.cardsOfPlayer.pop()
      box.push(cardOne)
      box.push(cardTwo)

      if (cardOne.score > cardTwo.score) {
        this.playerOne.cardsOfPlayer.push(...box)
        box.splice(0, box.length)

        if (this.playerOne.cardsOfPlayer.length === 0) {

          return "PlayTwo is Winner!"
        }
        if (this.playerTwo.cardsOfPlayer.length === 0) {
          return "PlayOne is Winner!"
        }
      } else if (cardOne.score < cardTwo.score) {
        this.playerTwo.cardsOfPlayer.push(...box)
        box.splice(0, box.length)
        if (this.playerOne.cardsOfPlayer.length === 0) {
          return "PlayTwo is Winner!"
        }
        if (this.playerTwo.cardsOfPlayer.length === 0) {
          return "PlayOne is Winner!"
        }
      } else {
        if (this.playerOne.cardsOfPlayer.length <= 3) {
          return "PlayTwo is Winner!"
        }
        if (this.playerTwo.cardsOfPlayer.length <= 3) {
          return "PlayOne is Winner!"
        }
        for (let i = 1; i < 4; i++) {
          box.push(this.playerOne.cardsOfPlayer.pop())
          box.push(this.playerTwo.cardsOfPlayer.pop())
        }

      }

    }

  }

}
//start the game.

let game = new Game()
//wash the cards 
game.washCards()
//distribute the cards to players
game.distribute()
//show who is the winner
let winner = game.play()
console.log(winner)
