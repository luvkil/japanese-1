/*(my setintervlal timer was actually working, then it stopped but i cant figure out why. the other thing is 
how do i change the setinterval to miniutes and seconds instead of just seconds??? )*/


//grab start button 
var startButton = document.querySelector(".start");

//create click event that controls time function and question function
startButton.addEventListener("click", function (){
 setTime();
 main();
 //if or else statement making button disappear
  if(startButton === "onclick"){
    startButton.style.diplay = "none"
  }else{startButton.style.display = "visible"}
});



//create  setTime function by first grabbing the countTime element and setting a variable
var count = document.querySelector(".time");

function setTime(){

var seconds= 300;
var interval = setInterval(function(){
  seconds--;
  //stops the time interval when seconds is equal to zero 
  if (seconds === 0){
    clearInterval(interval);
    alert("Quiz is over");
  }
    count.textContent = seconds;

}, 1000);

}


// defining the question data set
var questionSet = [
  {
    question: "How do you declare a variable in JavaScript?",
    choices: ["var", "const", "path", "request"],
    answer: "var",
  },


  {
    question: "what is the attribute used in the script element the links javaSript to html?",
    choices: ["src", "link", "href", "url"],
    answer: "src",
  },


{
    question: "how do we access the dom in javascript?",
    choices: ["queryselect", "getElementById", "queryselectall", "getElementByTag",],
    answer: "all",
  },

{
    question: "what lanaguage is the engine of front end web-development?",
    choices: ["javaSript", "python", "node.js", "ruby"],
    answer: "javaScript",
  },

];

//selecting html question container
var quizQuestions = document.querySelector("#quiz-questions");

//selecting html list 
let  listOne = document.querySelector(".info-1")
let  listTwo = document.querySelector(".info-2")
let  listThree = document.querySelector(".info-3")
let  listFour = document.querySelector(".info-4")

function main(){
  for(var i = 0; i < questionSet.length;i++){
    quizQuestions.innerHTML = questionSet[i].
    question;
  

  for(var index = 0; index < questionSet[i].choices.length;index++){
      listOne.innerHTML = questionSet[index].choices[0]
      listTwo.innerHTML = questionSet[index].choices[1]
      listThree.innerHTML = questionSet[index].choices[2]
      listFour.innerHTML = questionSet[index].choices[3]
}



};










/*//fetching the element that button wiil be appended
var newUl = document.querySelector(".buttonlist");
var buttonchoice;

//this function is use to create dynamic buttons
function showQuestion  (){
for(var i = 0; i < questionSet.length;i++){

  buttonchoice = document.createElement("button");
  //<button></button>
  buttonchoice.innerHTML = questionSet[i].question;
  //<button>How do you declare a variable in JavaScript?</button>
  buttonchoice.onclick = CheckAnswers();
  //<button onclick="CheckAnswers()">How do you declare a variable in JavaScript?</button>
  newUl.append(buttonchoice);

  for(var index = 0; index < questionSet[i].choices.length;index++){
    buttonchoice = document.createElement("button");
    //<button></button>
    buttonchoice.innerHTML = questionSet[i].choices[index];
    //<button>How do yo u declare a variable in JavaScript?</button>
    buttonchoice.onclick = CheckAnswers();
    //<button onclick="CheckAnswers()">How do you declare a variable in JavaScript?</button>
    newUl.append(buttonchoice);


  };

   
}




};
  


function CheckAnswers() {
    /*if(buttonchoice == questionSet[0].answer){
      alert("Yayyyyy");
    }else{
      alert("Booooooo");
    }*/
};
    












/*function showQuestion() {
console.log(questionSet);

   Code dynamically create a button for each Answer Choice
 var choice_1 = document.createElement("button");
  choices_1.setAttribute(".info-2",questionSet[0].choices)
  choice_1.setAttribute(".info-2", questionSet[0].choices[0])
  choice_1.addEventListener('click', function() {
    questionSet;
    if(choice[0] === answer[1]){
      document.setAttribute(".info-2")
    }
    else{
      document.setAttribute("incoreect");
    }
  })
}*/

