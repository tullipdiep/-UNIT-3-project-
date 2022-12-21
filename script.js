/* Declare variables below to save the different sections (divs) of your story*/
let startButton = document.querySelector('.start');
let optionOne = document.querySelector('.option-one');
let optionTwo = document.querySelector('.option-two');
let continueButton = document.querySelector('.continue');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let storyOpening = document.querySelector('.story-opening');
let screenOne = document.querySelector('.screen-one');
let CONTINUEbutton = document.querySelector('.CONTINUE');
let EndTextOne = document.querySelector('.endTextOne');
let EndTextTwo = document.querySelector('.endTextTwo');
let CLICKone= document.querySelector('.clickOne');
let CLICKtwo= document.querySelector('.clickTwo');

startButton.onclick = function() {
  screenOne.style.display = 'block'
  storyOpening.style.display = 'none'
}

optionOne.onclick = function(){
  optionOneScreen.style.display = 'block'
  screenOne.style.display= 'none'
}



continueButton.onclick= function() {
  optionOneEnd.style.display = 'block'
  optionOneScreen.style.display= 'none'
}

EndTextOne.onclick= function(){
  CLICKone.innerHTML = "GAME OVER"
}

optionTwo.onclick = function () {
  optionTwoScreen.style.display = 'block'
  screenOne.style.display= 'none'
}

CONTINUEbutton.onclick = function(){
  optionTwoEnd.style.display = 'block'
  optionTwoScreen.style.display = 'none'
}

EndTextTwo.onclick= function(){
  CLICKtwo.innerHTML = 'GAME OVER'
}

/*
INSERT_VARIABLE.onclick = function() {

};


INSERT_VARIABLE.onclick = function() {

};


*/