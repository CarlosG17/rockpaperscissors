// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {
    $("#userChoice").text($("#input").val());
});
// DOCUMENT READY FUNCTION BELOW
var userChoice= "";
var computerChoice= "";
var winner="";
var randomNumber= 0;

$("#shoot").click(function() {
    var userChoice= $("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber = Math.random();
    
if (randomNumber < .33){
    computerChoice ="rock";
}
else if (randomNumber >.33 && randomNumber < .66){
    computerChoice = "paper";
}
else {
        computerChoice = "scissors";
}
console.log(computerChoice);
$("#computerChoice").text(computerChoice);
$("#computerChoice").text(computerChoice);

if (userChoice === computerChoice) {
        alert ("draw!");
    }
else if(userChoice === "rock" && computerChoice === "paper"){
        alert ("You lose!")
    }
else if(userChoice === "rock" && computerChoice === "scissors"){
        alert ("You win!")
    }
else if(userChoice === "paper" && computerChoice === "scissors"){
        alert ("You lose!")
    }
else if(userChoice === "paper" && computerChoice === "rock"){
        alert ("You win!")
    }
else if(userChoice === "scissors" && computerChoice === "rock"){
        alert ("You lose!")
    }
else if(userChoice === "scissors" && computerChoice === "paper"){
        alert ("You win!")
    }
});
