// needs timer, event listeners, prevents-default/propagation, data displays, content, style
//timer for each question?

//  
var header = document.querySelector(".header")
var startButton = document.querySelector("#start")
var questionSpace = document.querySelector(".question")
var answers = document.querySelector(".answers")
var scoreLocation = document.querySelector(".score")
var retryButton = document.querySelector(".retry")
var message = document.querySelector("h3")
var topFive = document.querySelector("ul")
var input = document.querySelector(".name")

var quizzerName = input.value.trim()
var score = [0]

var ques1 = {
    question: "What can stop cats from producing allergens?",
    answers: ["Egg yolks from a chicken raised with cats", "Making cats go vegan", "The most expensive angus beef", "Shaving their hair"],
    correct: document.querySelector('.A')
    // correct answer A
}
var ques2 = {
    question: "What pigment is extremely rare to find in nature?",
    answers: ["Purple", "Red", "Blue", "Yellow"],
    correct: document.querySelector('.C')
    // correct answer C
}
var ques3 = {
    question: "Why is a tiger orange?",
    answers: ["They're fancy", "Their prey is color blind", "To show they are dangerous", "They are brown"],
    correct: document.querySelector('.B')
    // correct answer B
}
var ques4 = {
    question: "What are daddy-long-legs?",
    answers: ["The most venomous spider in the world", "Scorpions and they aren't venomous at all", "The second most venomous spider in the world", "A delightful snack"],
    correct: document.querySelector('.B')
    // correct answer B
}
var ques5 = {
    question: "Why were bugs so big in the Carboniferous period?",
    answers: ["They had no predators so they could grow", "There weren't any animals to breathe so there was more oxygen", "Plants produced more oxygen because the ozone layer hadn't developed", "Trees couldn't decay so it trapped carbon and produced an abundance of oxygen "],
    correct: document.querySelector('.D')
    //correct answer D
}
startButton.addEventListener("click", quiz);
answers.addEventListener("click", quesChange);
retryButton.addEventListener("click", startOver);

function quiz(event) {
    //hide header and display first question
    // event.preventDefault
    header.setAttribute("style", "display:none");
    questionSpace.setAttribute("style", "display:flex");
    answers.setAttribute("style", "display:block");
}
function quesChange(event) {
    //go through questions and display if right or wrong
    var notice = event.target;
    if (questionSpace.children[0].textContent == ques1.question) {
        questionSpace.children[0].textContent = ques2.question;
        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques2.answers[i];
        }
        if (notice.matches(".A")) {
            score++
            message.textContent = "correct "+score
            
        } else {
            message.textContent = "wrong"
        }
    } else if (questionSpace.children[0].textContent == ques2.question) {
        questionSpace.children[0].textContent = ques3.question;
        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques3.answers[i];
        }
        if (notice.matches(".C")) {
            score++
            message.textContent = "correct"
            
        } else {
            message.textContent = "wrong"
        }
    } else if (questionSpace.children[0].textContent == ques3.question) {
        questionSpace.children[0].textContent = ques4.question;
        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques4.answers[i];
        }
        if (notice.matches(".B")) {
            score++
            message.textContent = "correct"
            
        } else {
            message.textContent = "wrong"
        }
    } else if (questionSpace.children[0].textContent == ques4.question) {
        questionSpace.children[0].textContent = ques5.question;
        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques5.answers[i];
        }
        if (notice.matches(".B")) {
            score++
            message.textContent = "correct"
            
        } else {
            message.textContent = "wrong"
        }
    } else {
        if (notice.matches(".D")) {
            score++
            message.textContent = "correct"
            
        } else {
            message.textContent = "wrong"
        }
        questionSpace.setAttribute("style", "display:none");
        answers.setAttribute("style", "display:none");
        scoreLocation.setAttribute("style", "display:block");

        localStorage.setItem("score", JSON.stringify(score));
        localStorage.setItem("name", quizzerName);

        // get name&score for-loop create li and insert only 5, set up a sort and remove least if the score is higher than the previous ones 

        var scoreList = document.createElement('li')
        scoreList.textContent = quizzerName+" "+score
        topFive.appendChild(scoreList)
        console.log(score)
    }
}
function startOver(event) {
    scoreLocation.setAttribute("style", "display:none")
    header.setAttribute("style", "display:block")
    questionSpace.children[0].textContent = ques1.question
    for (i = 0; i <= 3; i++) {
        answers.children[i].textContent = ques1.answers[i];
    }
    score = [0]
}


// add a function that calculates and displays score also more event listeners for answers and replay