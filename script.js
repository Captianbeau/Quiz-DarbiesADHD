// needs timer, event listeners, prevents-default/propagation, data displays, content, style
//timer for each question?

//  
var header = document.querySelector(".header")
var startButton = document.querySelector("#start")
var questionSpace = document.querySelector(".question")
var answers = document.querySelector(".answers")
var scoreLocation = document.querySelector(".score")
var retryButton = document.querySelector(".retry")


var score = [];
var ques1 ={
    question:"What can stop cats from producing allergens?",
    A:"Egg yolks from a chicken raised with cats",
    B:"Making cats go vegan",
    C:"The most expensive angus beef",
    D:"Shaving their hair",
    // correct: ques1.A
    // correct answer A
}
var ques2 ={
    question:"What pigment is extremely rare to find in nature?",
    answers:["Purple","Red","Blue","Yellow"]
   
    // correct: ques2.C

}
var ques3 ={
    question:"Why is a tiger orange?",
    answers:["They're fancy","Their prey is color blind","To show they are dangerous","They are brown"]
    // correct: ques3.B
}
var ques4 ={
    question:"What are daddy-long-legs?",
    A:"The most venomous spider in the world",
    B:"Scorpions and they aren't venomous at all",
    C:"The second most venomous spider in the world",
    D:"A delightful snack",
    // correct: ques4.B
}
var ques5 ={
    question:"Why were bugs so big in the Carboniferous period?",
    A:"They had no predators so they could grow",
    B:"There weren't any animals to breathe so there was more oxygen",
    C:"Plants produced more oxygen because the ozone layer hadn't developed",
    D:"Trees couldn't decay so it trapped carbon and produced an abundance of oxygen ",
    // correct: ques5.D
}


function quiz(event){
//hide header and display first question
// event.preventDefault
header.setAttribute("style","display:none");
questionSpace.setAttribute("style","display:flex");
answers.setAttribute("style","display:block");


}
function ques2Change(event){
//go through questions and display if right or wrong
if(questionSpace.children[0] == ques1.question){
questionSpace.children[0].textContent = ques2.question;
for( i = 0 ; i <= 4 ; i++){
answers.children[i].textContent = ques2.answers[i];
};
 } else if(questionSpace.children[0] == ques3.question)
 questionSpace.children[0].textContent = ques3.question;
// for( i = 0 ; i <= 4; i++){
// answers.children[i].textContent = ques3.answers[i];
// }
}
startButton.addEventListener("click", quiz);
answers.addEventListener("click", ques2Change);
// add a function that calculates and displays score also more event listeners for answers and replay