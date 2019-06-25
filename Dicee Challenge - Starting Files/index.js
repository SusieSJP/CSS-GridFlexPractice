var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImag1 = "dice" + randomNumber1 + ".png";
var randomImgSrc1 = "images/" + randomDiceImag1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomDiceImag2 = "dice" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomDiceImag2;

document.querySelectorAll("img")[0].setAttribute("src",randomImgSrc1);
document.querySelectorAll("img")[1].setAttribute("src",randomImgSrc2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
