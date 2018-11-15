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
var randomNumber= Math.random();
$("#shoot").click(function() {
    var userChoice= $("#input").val();
    $("#userChoice").text(userChoice);
if (randomNumber <.50 ){
    computerChoice ="rock";
}
else if (randomNumber >.60 && randomNumber < 1.00){
    computerChoice = "paper";
}
else {
        computerChoice = "scissors"
}
$("#computerChoice").text(computerChoice);
});

