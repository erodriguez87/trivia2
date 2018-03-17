// Trivia Game
// ------------

// Wait for the page to finish loading
$(document).ready(function() {

    // there's probably a better way to do this, I declare these two arrays up here to use them in the initial game set
    var questions = ['Who is the GOAT?','Who will win the championship?','Who is the best rookie?','Will the spurs make the playoffs?'];
    var answers = [['jordan','kareem','shaq','kobe'],['warriors','cavs','heat','rockets'],['mitchell','simmons','kuzma','lonzo',],['no','yes','no','no']];

//start button for starting the game; calls starting HTML which just presents a button for the user to start the game
function gameSet(){
  resetHtml = "<a class='btn btn-primary btn-lg btn-block startBtn'>Start the game!</a>";
  $(".gameBoard").html(resetHtml);
}

gameSet();

//capture the click of the start button, set up the first question and start the first timer
$("body").on("click", ".startBtn", function(event){
	generateHTML();
});

// generates the next card with question and possible answers in DIVs
function generateHTML() {
	gameHTML = questions[countQ] + "<div class='answers A'>" + answers[countQ][0] + "</div><div class='answers B'>"+answers[countQ][1]+"</div><div class='answers C'>"+answers[countQ][2]+"</div><div class='answers D'>"+answers[countQ][3]+"</div>";
	$(".gameBoard").html(gameHTML);
}

function generateScore() {
  var finalScore = correct.length;
  var finalPossible = game.answers.length;

	gameHTML = 'Final score of ' + "<div class='score'>" + finalScore + " out of "+finalPossible+"</div>";
	$(".gameBoard").html(gameHTML);
}


//set of click events that look for the class in the answer divs. They capture the text to compare against the right answers. 
$("body").on("click",".A", function(event){
  userResponse = $(this).text();
  scoreCheck();
});
$("body").on("click",".B", function(event){
  userResponse = $(this).text();
  scoreCheck();
});
$("body").on("click",".C", function(event){
  userResponse = $(this).text();
  scoreCheck();
});
$("body").on("click",".D", function(event){
  userResponse = $(this).text();
  scoreCheck();
});

function scoreCheck(){
  var lenA = (answers.length - 1);
  console.log('length of answers' + lenA);
  if (countQ < lenA){
    for (i = 0; i< lenA;i++){
      if (userResponse === game.answers[countQ][i]){
        correct.push(userResponse);
        console.log('logging the array of correct answers' + correct);
        // generateHTML();
      } else if (userResponse != game.answers[countQ][i]){
        console.log('do better next time');    
      // generateHTML();
      }
    }
      countQ++;
      console.log('answers length ' + lenA-1)
      console.log('logging what question i am on ' + countQ);
      generateHTML();
  } else if (countQ >= lenA) {
    // generates a scoreboard after looping through all the questions
    console.log('end of game');
    generateScore();
  }
};


var number = 10;
var countQ = 0;
var intervalId;
var correct =[];

  var game = {
    questions: ['Who is the GOAT?','Who will win the championship?','Who is the best rookie?','Will the spurs make the playoffs?'],
    answers:[['jordan','kareem','shaq','kobe'],['warriors','cavs','heat','rockets'],['mitchell','simmons','kuzma','lonzo',],['no','yes','no','no']],
    score: 0,

    run: function() {
    //  The decrement function().
      
      function decrement() {  
        number--;
        $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          
          number = 30;
          $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          return;
        
      }

      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);

    },
  }
})
