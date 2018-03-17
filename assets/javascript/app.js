// Trivia Game
// ------------

// Wait for the page to finish loading
$(document).ready(function() {
  var questions = ['Who is the GOAT?','Who will win the championship?','Who is the best rookie?','Will the spurs make the playoffs?'];
  var answers = [['jordan','kareem','shaq','kobe'],['warriors','cavs','heat','rockets'],['mitchell','simmons','kuzma','lonzo',],['no','yes','no','no']];

//set up a start button for starting the game
function gameSet(){
  resetHtml = "<a class='btn btn-primary btn-lg btn-block startBtn'>Start the game!</a>";
  $(".gameBoard").html(resetHtml);
}

//call the start button function
gameSet();

//capture the click of the start button, set up the first question and start the first timer
$("body").on("click", ".startBtn", function(event){
	generateHTML();
});

function generateHTML() {
	gameHTML = questions[countQ] + "<div class='answers A'>" + answers[countQ][0] + "</div><div class='answers B'>"+answers[countQ][1]+"</div><div class='answers C'>"+answers[countQ][2]+"</div><div class='answers D'>"+answers[countQ][3]+"</div>";
	$(".gameBoard").html(gameHTML);
}

$("body").on("click",".A", function(event){
  alert('clicked');
  userResponse = $(this).text();
  scoreCheck();
});
$("body").on("click",".B", function(event){
  alert('clicked');
  userResponse = $(this).text();
});
$("body").on("click",".C", function(event){
  alert('clicked');
  userResponse = $(this).text();
});
$("body").on("click",".D", function(event){
  alert('clicked');
  userResponse = $(this).text();
});

function scoreCheck(){
  for (i = 0; i< answers.length;i++){
    console.log(game.answers[countQ][i]);
}


var number = 10;
var countQ = 0;
var intervalId;
var correct =[];
var answerRows = 
            "<div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A1' id='A1-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A2' id='A2-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A3' id='A3-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A4' id='A4-1'></div>";
$('.answerRow').html(answerRows);

  var game = {
    questions: ['Who is the GOAT?','Who will win the championship?','Who is the best rookie?','Will the spurs make the playoffs?'],
    answers:[['jordan','kareem','shaq','kobe'],['warriors','cavs','heat','rockets'],['mitchell','simmons','kuzma','lonzo',],['no','yes','no','no']],
    
    run: function() {
    //  The decrement function().
      
      function decrement() {  
        number--;
        $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          if (number === 0) {
            alert("Time Up!");
            var score = 0;
            if ($('#jordan').prop('checked')===true){
              score++;
              correct += 'Jordan';
            } else; 
            if ($('#rockets').prop('checked')===true){
              score++;
              correct += 'Rockets';
            } else; 
            if ($('#mitchell').prop('checked')===true){
              score++;
              correct += 'Mitchell';
            } else; 
            if ($('#no').prop('checked')===true) {
            score++;
            correct += 'No';
            } else; 
          $(".scoreBoard").html("<h4>"+ 'Your final score is ' + score + ' out of 4' + "</h4>");
          var answerRows = 
            "<div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A1' id='A1-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A2' id='A2-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A3' id='A3-1'></div><div class ='container col-lg-3 col-md-3 col-sm-3 col-xs-3 panel margin stdWidth A4' id='A4-1'></div>";
            $('.answerRow').html(answerRows);
          gameSet();
          number = 30;
          $(".timeBoard").html("<h1>" +"Time Left "+ number + " Seconds" + "</h1>");
          return;
        }
      }

      function gameSet(){
        var main = $("body");
        var btns = main.find(".A1");
        
          for (var i = 0; i < 4; i++) {         
            var question1 = game.questions[0];
            $(".Q1").html("<h4>" + question1 + "</h4>");
            var inputA1 = $("<h4>"+game.a1[i]+"</h4>");
            var inputQ1 = $("<input>");
            
            inputQ1.addClass("inputBtns");
            inputQ1.attr("type", 'radio');
            inputQ1.attr("id", game.a1[i]);
            inputQ1.attr("name", 'answer1');
    
            btns.append(inputQ1);
            btns.append(inputA1);          
          }
      }
      gameSet();
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);

    },
  }
})