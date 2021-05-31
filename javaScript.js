

//dom vaiables
var startContent = document.querySelector('#start-content-hidden');
var startButton = document.querySelector('.start-button');
var quizTime = document.querySelector('#time'); 
var runningScore = document.querySelector('#score')

var questionContent = document.querySelector('#question-content');
var quizQuestion = document.querySelector('#quiz--questions');
var choiceList = document.querySelector('.choicelist');

var correctOrInncorrect = document.querySelector('#correct-incorrect');
var Result = document.querySelector('#result');
var formInitial = document.querySelector('initial');
var highScores = document.querySelector('#high-scores-container-hidden');
var submitButton = document.querySelector('#submit-btn');
var highScoreList = document.querySelector('#high-score-list');
var first = document.querySelector('#first'); 
var second= document.querySelector('#second'); 
var third = document.querySelector('#third');

//scope variables
var questionsAndChoices;
var randomQuestion;
var Time;
var score;



//question set function
function questionSet (){
     questionsAndChoices = [

        {
            questions: "what is the language that powers front-end web   development?",
            choices: ["javascript","pyhon","abode","english"],
            answer: "javasript",
    },
        {
            questions: "what is a function use for ",
            choices: ["creating procedures and calculation","if or else statement", "making music",""],
            answer:"creating procedures and calculation",

    },

        {
            questions:"what is the opperand for not in javasript",
            choices:["//","!","==","booleon"],
            answer:"!",

    },

        {
            questions:"what is the purpose of the console.log function",
            choices:["its a part of html", "its use for debbugging", "useful to programmers for testing their code", "no purpose"],
            answer:"useful to programmers for testing their code",
    },
        {
            questions:"what is the purpose of an array in javasript",
            choices:["making list of values and ojects","its the same as a variable","use to make test","no purpose"],
            answer:"making list of choices and objests",
    },
        
  ]
};

function main(){
 questionSet();
 nextQuestionsAndChoices();

//setting time interval
 var runningTime = 60;
 Time = setInterval(() => {
    runningTime--;


    quizTime.textContent = runningTime;

 if(Time === 0){
    alert("quiz is over");
    clearInterval(time);
    //change to score card
    }

  }, 1000);
}


function nextQuestionsAndChoices(){
//randomise question and choices list
randomQuestion = Math.floor( questionsAndChoices.length * Math.random());


//accessing choicelist with randomize index list
for( let i = 0; i < questionsAndChoices[randomQuestion].choices.length;i++ ){
        choiceList.children[i].textContent = questionsAndChoices[randomQuestion].choices[i];
    };

//random quiz questions 
//quizQuestion.textContent = questionsAndChoices.qestions
for(let index = 0; index < questionsAndChoices[randomQuestion].questions.length;index++){
        quizQuestion[index].textContent = questionsAndChoices[randomQuestion].questions[index];
    }

}

//function creating hidden section
function change(element){
    startContent.display.style = "none";
    questionContent.display.style = "none";
    Result.display.style = "none";
    highScores.display.style = "none";
    element.display.style = "display-block";
}


function intial(){
    var currenScore = {};
    var highScore = [];



}
