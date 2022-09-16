console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

// using a object to store player data
let player = {
    name: "Tommy",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// uses object to find the values then render it on the page
playerEl.textContent = player.name + ": $" + player.chips

// Generates random value between 1 - 11
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// this starts the blackjack game, generating two randon cards from random card function
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// this renders the cards in the game keeping all the cards using arrys with a for loop. So we get all cards instead of just two.  
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
	// I used a if else statement to show the different game states, by using Dom manipulation I also rendered a message when the variables are met. 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

// this is the newcard function which generates game logic added error message incase game breaks 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    } else {
		message = "Please refresh page or start a new game"
	}
	messageEl.textContent = message
}

// to do - make use of chips 