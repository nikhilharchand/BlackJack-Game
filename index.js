let player ={
    name:"Per",
    Chips:145
     
}

let firstCard=getRandomCard()
let secondCard=getRandomCard()
let cards=[firstCard,secondCard]
let sum=firstCard + secondCard;

let hasBlackJack=false
let isAlive=true
let message=""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl=document.querySelector("body")
let cardsEl = document.getElementById("cards-el")

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $" +player.Chips

function getRandomCard(){
    
    let randomNumber= Math.floor(Math.random()*13)+1
    if (randomNumber>10){
        return 10
    } else if(randomNumber===1){
        return 11
    }else{
        return randomNumber
    }
}
function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard + secondCard;
    renderGame()
}

function renderGame(){
    cardsEl.textContent="cards:"
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i]+" "
    }

    sumEl.textContent="Sum:" + sum
    if (sum<=20){
        message=("Do you want to draw a new card?")
        
    } else if (sum===21){
         message=("wohoo you get blackjack")
         hasBlackJack=true
    } else{
        message=("you are out of the game")
        isAlive=false
    }
    messageEl.textContent = message
}
 function newCard(){
    // console.log("Drawing a new card from the deck")
    if (isAlive===true && hasBlackJack===false){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    // console.log(cards)
    renderGame()
 }
}

// ***recap***
// arrays
// booleans
// if else
// comparison operator
// logical operatorfor loops
// the math Object
// return statement
// 


