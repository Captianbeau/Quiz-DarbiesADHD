// needs timer, event listeners, prevents-default/propagation, data displays, content, style
//timer for each question?

//  
var header = document.querySelector("header")
var startbttn = document.querySelector("button")
var questionSpace = document.querySelector(".question")
var answers = document.querySelector(".answers")
var scoreLocation = document.querySelector(".score")
var score = [];
var ques1 ={
    question:"What can stop cats from producing allergens?",
    A:"Egg yolks from a chicken raised with cats",
    B:"Making cats go vegan",
    C:"The most expensive angus beef",
    D:"Shaving their hair",
    correct: A
    // correct answer A
}
var ques2 ={
    question:"What pigment is extremely rare to find in nature?",
    A:"Purple",
    B:"Red",
    C:"Blue",
    D:"Yellow",
    correct: C

}
var ques3 ={
    question:"Why is a tiger orange?",
    A:"They're fancy",
    B:"Their prey is color blind",
    C:"To show they are dangerous",
    D:"They are brown",
    correct: B
}
var ques4 ={
    question:"What are daddy-long-legs?",
    A:"The most venomous spider in the world",
    B:"Scorpions and they aren't venomous at all",
    C:"The second most venomous spider in the world",
    D:"A delightful snack",
    correct: B
}
var ques5 ={
    question:"Why were bugs so big in the Carboniferous period?",
    A:"They had no predators so they could grow",
    B:"There weren't any animals to breathe so there was more oxygen",
    C:"Plants produced more oxygen because the ozone layer hadn't developed",
    D:"Trees couldn't decay so it trapped carbon and produced an abundance of oxygen ",
    correct: D
}
quiz = function(event){
//hide header and pullup first question
//    header.setAttribute('style','display:none')
var ques = document.createElement('h2')
ques.textContent(ques1['question'])
questionSpace.appendChild(ques)

}
quesChange = function(){
//go through questions and display if right or wrong
if ()
}
startbttn.addEventListener('click',quiz())
// add a function that calculates and displays score also more event listeners for answers and replay