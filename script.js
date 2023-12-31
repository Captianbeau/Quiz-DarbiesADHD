//  querySelectors
var header = document.querySelector(".header");
var startButton = document.querySelector("#start");
var questionSpace = document.querySelector(".question");
var answers = document.querySelector(".answers");
var scoreLocation = document.querySelector(".score");
var retryButton = document.querySelector(".retry");
var timeLeft = document.querySelector("h3");
var message = document.querySelector(".message");
var submit = document.querySelector(".submit");
var finalSDisplay = document.querySelector("p");
var submitButton = document.querySelector(".enter")
var outOfTime = document.querySelector(".OOT")
var topFive = document.querySelector("ul");
var input = document.querySelector(".name");
// querySelectors end

//user input variables
var score = 0;
var topScores = JSON.parse(localStorage.getItem("topScores")) || [];
// user input end

// objects: questions
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
// objects: questions end

// eventListeners
startButton.addEventListener("click", quiz);
answers.addEventListener("click", quesChange);
submitButton.addEventListener("click", scoreBoard);
retryButton.addEventListener("click", startOver);
// eventListeners end

// timer functions start
var timeStop = 0;
var secondsLeft = 60;
function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            stopTimer()
        }
    }, 1000);
}
// setTime end

function stopTimer() {
    if (timeStop == 0) {
        timesUp()
    }
}
//stopTimer function end

function timesUp() {
    outOfTime.textContent = "Ran out of time"
    outOfTime.setAttribute("style", "display:flex")
    questionSpace.setAttribute("style", "display:none");
    answers.setAttribute("style", "display:none");
    scoreLocation.setAttribute("style", "display:block");
}
  //timesUp function end
//timer functions end

//quiz taking functions start
function quiz(event) {
    header.setAttribute("style", "display:none");
    questionSpace.setAttribute("style", "display:flex");
    answers.setAttribute("style", "display:block");
    setTime()

}
//quiz function end

function quesChange(event) {
    var notice = event.target;
    if (questionSpace.children[0].textContent == ques1.question) {
        questionSpace.children[0].textContent = ques2.question;

        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques2.answers[i];
        }
        if (notice.matches(".A")) {
            score++
            message.textContent = " correct " + score;
        } else {
            secondsLeft = secondsLeft - 10
            message.textContent = " wrong " + score;
        }
    } else if (questionSpace.children[0].textContent == ques2.question) {
        questionSpace.children[0].textContent = ques3.question;

        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques3.answers[i];
        }
        if (notice.matches(".C")) {
            score++

            message.textContent = " correct " + score;
        } else {
            secondsLeft = secondsLeft - 10
            message.textContent = " wrong " + score;
        }
    } else if (questionSpace.children[0].textContent == ques3.question) {
        questionSpace.children[0].textContent = ques4.question;

        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques4.answers[i];
        }
        if (notice.matches(".B")) {
            score++

            message.textContent = " correct " + score;
        } else {
            secondsLeft = secondsLeft - 10
            message.textContent = " wrong " + score;
        }
    } else if (questionSpace.children[0].textContent == ques4.question) {
        questionSpace.children[0].textContent = ques5.question;

        for (i = 0; i <= 3; i++) {
            answers.children[i].textContent = ques5.answers[i];
        }
        if (notice.matches(".B")) {
            score++

            message.textContent = " correct " + score;
        } else {
            secondsLeft = secondsLeft - 10
            message.textContent = " wrong " + score;
        }
    } else {
        questionSpace.setAttribute("style", "display:none");
        answers.setAttribute("style", "display:none");
        submit.setAttribute("style", "display:block")
        timeStop++

        if (notice.matches(".D")) {
            score++
            message.textContent = " correct " + score;
        } else {
            message.textContent = " wrong " + score;
        }

        finalSDisplay.textContent = "Score: " + score;
    }
}
// quesChange function end
// quiz taking functions end

// scoring functions start
function scoreBoard(event) {
    event.preventDefault()
    var quizzerName = input.value.trim();
    var stringScore = score.toString()

    if (quizzerName.length > 0) {
        var finalScore = {
            qName: quizzerName,
            score: stringScore
        }
        topScores.push(finalScore);
        submit.setAttribute("style", "display:none")
        scoreLocation.setAttribute("style", "display:block");
        renderScoreBoard();
        saveScores();
    }
}
// scoreBoard function end

function renderScoreBoard() {
    topFive.innerHTML = ''
    
    for (i = 0; i < topScores.length; i++) {
        var entry = topScores[i];
        var li = document.createElement("li");
        li.textContent = "name: " + entry.qName + " score: " + entry.score;
        li.setAttribute("data-index", i)
        topFive.appendChild(li);
    }
}
// renderScoreBoard function end

function saveScores() {
    localStorage.setItem("topScores", JSON.stringify(topScores));
}
  // saveScores function end
// scoring functions end

// retry functions start
function startOver(event) {
    scoreLocation.setAttribute("style", "display:none")
    outOfTime.setAttribute("style", "display:none")
    header.setAttribute("style", "display:block")
    questionSpace.children[0].textContent = ques1.question
    finalSDisplay.textContent = ""
    for (i = 0; i <= 3; i++) {
        answers.children[i].textContent = ques1.answers[i];
    }
    resets()

}
//startOver function end

function resets() {
    score = [0];
    secondsLeft = 60;
    quizzerName = input.value.trim();
    timeStop = 0;
}
  //resets function end
//retry functions end
