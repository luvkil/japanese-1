/*(my setintervlal timer was actually working, then it stopped but i cant figure out why. the other thing is 
how do i change the setinterval to miniutes and seconds instead of just seconds??? )*/


//grab start button 
var startButton = document.querySelector(".start");
//grab div id that hides button content
var startContent = document.querySelector("#start-content");



//create click event that controls time function and question function
startButton.addEventListener("click", function (){
 setTime();
main();
 startContent.style.display = "none";
 
 
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

};


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

//selecting list container
var  listOne = document.querySelector(".info-1");
var  listTwo = document.querySelector(".info-2");
var  listThree = document.querySelector(".info-3");
var  listFour = document.querySelector(".info-4");
var  questionContent = document.querySelector("#question-content");
var index = -1;
//var nextButton = document.querySelector("#next-button");


//function containing dy(namic qestions and choices
function main(){
  index++

  quizQuestions.innerHTML = questionSet[index].question;
   
    listOne.innerHTML =   questionSet[index].choices[0]
    listTwo.innerHTML =   questionSet[index].choices[1]
    listThree.innerHTML = questionSet[index].choices[2]
    listFour.innerHTML =  questionSet[index].choices[3]

    questionContent.style.color = "gray";
};


quizQuestions.addEventListener("click",function ques(){
quizQuestions.innerHTML = questionSet[index].question;

});


  /*i(questionSet[index].question && questionSet[index].choices === questionSet[index].answer){
    console.log("correct");
  }*/

















