/*(my setintervlal timer was actually working, then it stopped but i cant figure out why. the other thing is 
how do i change the setinterval to miniutes and seconds instead of just seconds??? )*/


//grab start button
var relay_to_button = document.querySelector(".start");

//create click event that controls time function and question function
relay_to_button.addEventListener("click", function (){
 setTime();
 showQuestion();

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

/*(my object that used to store the question is a mess. should I put the proterties in  a bracket or not???)*/

// defining the question data set
var questionSet = [
  {
    question: "How do you declare a variable in JavaScript?",
    choices: ["var", "var", "path", "request"],
    answer: ["var","path","let","gel"],
  },


  {
    question: "what is the attribute used in the script element the links javaSript to html?",
    choices: ["src", "link", "href", "url"],
    answer: ["src","meta","div","http"],
  },

{
    question: "How is the logical comparison not, written in javaSript ?"
    choices: ["||" "!" "&&" "="],
    answer: ["!" "&&" "===" "*"]
  },


{
    question: "how do we access the dom in javascript?"
    choices: ["queryselect", "getElementById", "queryselectall", "getElementByTag",],
    answer: ["all","none","createElememt","gel"],
  },

{
    question: "what lanaguage is the engine of front web-development?",
    choices: ["javaSript", "python", "node.js", "ruby"],
    answer: ["javaScript","python","ruby","gel"],
  },

];

/*(what I am trying to do below is to create function that will add button to the empty li elemets
in html. can my first .addeventlister fire another evenlistener that is reference inside of it??
2. is the if or else statement the best option in this case?)*/


//fetching the element that button wiil be appended
var newUl = document.querySelector(".list");
var ulList =  newUl.children;



//this function is use to create dynamic buttons
function showQuestion  (){

    choice_1 = document.createElement("button");
var multiChoice = choices_1.setAttribute(".info-2",questionSet[0].choices)

    multiChoice.addEventListener('click', function() {
    questionSet;
    if(choice[0] === answer[1]){
      document.setAttribute(".info-2","correct")
    }
    else{
      document.setAttribute(".info-2","incorect");
    }
  });
    ulList.appendchild(multiChoice);

}

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

