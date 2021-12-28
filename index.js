// Dice Image 1 
var randomNumber1 = Math.floor(Math.random() * 6) + 1  //random no. 1 - 6
var randomDiceImage = "dice" + randomNumber1 + ".png"  //random image dice1 to dice6
var randomImageSource = "images/" + randomDiceImage  //random image source
var image1 = document.querySelectorAll("img")[0]  //selecting image tag

image1.setAttribute("src", randomImageSource)  //set source attribute

// Dice Image 2 
var randomNumber2 = Math.floor(Math.random() * 6) + 1  //random no. 1 - 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"  //random image dice1 to dice6
var randomImageSource2 = "images/" + randomDiceImage2  //random image source
var image2 = document.querySelectorAll("img")[1]  //selecting image tag

image2.setAttribute("src", randomImageSource2)  //set source attribute

// Change heading on conditions 
if (randomNumber1 > randomNumber2) {    // if player1 wins 
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}
else if (randomNumber2 > randomNumber1) {     // if player2 wins
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
} 
else {    // if both are same
    document.querySelector("h1").innerHTML = "Draw!"
}