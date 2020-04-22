var randomNumber1 = Math.random();
var randomNumber2 = Math.random();

randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
console.log(randomNumber1,randomNumber2);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");//For dice2 --> document.firstElementChild.lastElementChild.firstElementChild.lastElementChild;

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");//For dice2 --> document.firstElementChild.lastElementChild.firstElementChild.lastElementChild;
if(randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "player 1 wins ";
  }
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins ";

  }
else {
  document.querySelector("h1").innerHTML = "Match is a draw:) ";

  }
