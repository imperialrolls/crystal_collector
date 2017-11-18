// GLOBAL VARIABLES (Accessible by all functions)
// 

// this is the computer selected number the player is trying to match

var collectorNumber = "";

// this computer selected value for each crystal

var crystalNumber = [];

// 

var numberOfCrystals = 4;

// this is the players total score from each crystal click

var totalScore = 0;


// functions// Game counters

var winCounter = 0;
var lossCounter = 0;

// functions// init

function init() {
	for (i = 0; i < numberOfCrystals; i++) { 
   	    crystalNumber[i] = crystal_number();
    }
    collectorNumber = collector_number();
    document.getElementById("collectorNumber").innerHTML = collectorNumber;
    totalScore = 0;
}

// functions// startgame


function startgame(){}


// random number generator for crystal images ????

function crystal_number() {
	
var	crystalNumber = Math.floor(Math.random()*12) +1;

	console.log(crystalNumber);
	return crystalNumber;
}

function collector_number() {
	
var	value = Math.floor(Math.random()*102) +19;

	console.log(value);
	return value;
}

startgame();

// defining the crystal onclick handlers 

document.getElementById("crystal1").onclick = function(){
	totalScore += crystalNumber[0];
		updateCollector();

};

document.getElementById("crystal2").onclick = function(){
	totalScore += crystalNumber[1];
		updateCollector();
};

document.getElementById("crystal3").onclick = function(){
	totalScore += crystalNumber[2];
		updateCollector();

};

document.getElementById("crystal4").onclick = function(){
	totalScore += crystalNumber[3];
		updateCollector();

};

function updateCollector() {
	document.getElementById("totalScore").innerHTML = totalScore;
	if (totalScore == collectorNumber) {
		winCounter += 1;
		init();
		displayResults();
	} else if (totalScore > collectorNumber) {
		lossCounter += 1;
		init();
		displayResults();
	} 

}


// displays 

function displayResults() {
document.getElementById("winCounter").innerHTML = winCounter;
document.getElementById("totalScore").innerHTML = 0;
document.getElementById("lossCounter").innerHTML = lossCounter;
}

init();
displayResults();