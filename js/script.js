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
});

