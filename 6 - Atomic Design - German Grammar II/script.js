// Definite Article Learning & Testing functions.
$("#definiteArticleGoToTestButton").click(function(){
  fadeOutAllSections();
  $("#definiteArticleTest").delay(400).fadeIn();
});

$("#definiteArticleBackToLearnButton").click(function(){
  fadeOutAllSections();
  resetDefiniteArticleTest();
  $("#learnDefiniteArticle").delay(400).fadeIn();  
});

$("#definiteArticleTestSubmitButton").click(function(){
  let expectedOutput = ["der", "das", "die", "die", 
                        "den", "das", "die", "die", 
                        "dem", "dem", "der", "den +n", 
                        "des +es", "des +es", "der", "der"];
  let score = 0, cellsToHighlight = [], cellInput, userInput = [];
  
  // Iterate through all the td cells in the table and store the results to an array.
  $("#definiteArticleTestTable tr").each(function () {
    $('td', this).each(function () {
        cellInput = $(this).find(":input").val();
        userInput.push(cellInput);
     });
  });
  
  //Grade the student for their mark, comparing to the mark scheme.
  for (let i = 0; i < userInput.length; i++){
    if (userInput[i] == expectedOutput[i]){
      score++;
    } else {
      //Record which cells didn't have the correct answer.
      cellsToHighlight.push([Math.floor(i/4), i % 4]);
    }
  }
  
  //Update the display with the mark awarded to the student.
  let displayScoreMessage = "You scored " + score + " points out of 16.";
  $("#displayDefiniteArticleTestScore").text(displayScoreMessage);
  
  //Update the display with a message for improvement.
  let displayImprovementMessage = (cellsToHighlight.length > 0) ? "Careful! The cells highlighted yellow are those you misremembered." : "Congratulations, you remembered the table!";
  $("#displayDefiniteArticleTestImprovementTips").text(displayImprovementMessage);
  
  //Highlight the cells that didn't have the correct answer as areas for improvement.
  for (let i = 0; i < cellsToHighlight.length; i++){
    let cellID = "#t1-";
    cellID += cellsToHighlight[i][0].toString() + cellsToHighlight[i][1].toString();
    $(cellID).addClass("table-warning");
  }
});

$("#definiteArticleTestResetButton").click(function(){ 
  resetDefiniteArticleTest();
});

$("#definiteArticleGoToNextSectionButton").click(function(){ 
  fadeOutAllSections();
  $("#learnPossessivePronouns").delay(500).fadeIn();  
});

// Possessive Pronouns Learning & Testing functions.
$("#possessivePronounsGoToTestButton").click(function(){
  fadeOutAllSections();
  $("#possessivePronounsTest").delay(400).fadeIn();  
});

$("#possessivePronounsBackToLearnButton").click(function(){
  fadeOutAllSections();
  resetPossessivePronounsTest();
  $("#learnPossessivePronouns").delay(400).fadeIn();  
});

$("#possessivePronounsTestSubmitButton").click(function(){
  let expectedOutput = ["mein", "dein", "sein", "ihr", "sein", "unser", "euer", "ihr", "Ihr"];
  let score = 0, cellsToHighlight = [], cellInput, userInput = [];
  
  // Iterate through all the td cells in the table and store the results to an array.
  $(".t2Cell").each(function () {
    cellInput = $(this).find(":input").val();
    userInput.push(cellInput);
  });
  
  //Grade the student for their mark, comparing to the mark scheme.
  for (let i = 0; i < userInput.length; i++){
    if (userInput[i] == expectedOutput[i]){
      score++;
    } else {
      //Record which cells didn't have the correct answer.
      cellsToHighlight.push(i);
    }
  }
  
  //Update the display with the mark awarded to the student.
  let displayScoreMessage = "You scored " + score + " points out of 9.";
  $("#displayPossessivePronounsTestScore").text(displayScoreMessage);
  
  //Update the display with a message for improvement.
  let displayImprovementMessage = (cellsToHighlight.length > 0) ? "Careful! The cells highlighted yellow are those you misremembered." : "Congratulations, you remembered the table!";
  $("#displayPossessivePronounsImprovementTips").text(displayImprovementMessage);
  
  //Highlight the cells that didn't have the correct answer as areas for improvement.
  for (let i = 0; i < cellsToHighlight.length; i++){
    let cellID = "#t2-";
    cellID += cellsToHighlight[i].toString();
    $(cellID).addClass("table-warning");
  }
});

$("#possessivePronounsTestResetButton").click(function(){ 
  resetPossessivePronounsTest();
});

$("#possessivePronounsGoToNextSectionButton").click(function(){ 
  fadeOutAllSections();
  $("#credits").delay(400).fadeIn();  
});

// Navigation listener functions, which wait for the user to click on navbar elements
$("#definiteArticleNavButton").click(function(){
  fadeOutAllSections();
  resetDefiniteArticleTest();
  $("#learnDefiniteArticle").delay(400).fadeIn();  
});

$("#possessivePronounsNavButton").click(function() {
  fadeOutAllSections();
  resetPossessivePronounsTest();
  $("#learnPossessivePronouns").delay(400).fadeIn();
});

$("#creditsNavButton").click(function() {
  fadeOutAllSections();
  $("#credits").delay(400).fadeIn();
});

//Helper functions for material often reused.
function fadeOutAllSections(){
  //Iterate through all the divs which have the class section, and fade them out.
  $(".section").each(function(){
    $(this).fadeOut();
  });
}

function resetDefiniteArticleTest(){
  //Iterate through all the cells in the table, remove the input values and any highlighting.
  $("#definiteArticleTestTable tr").each(function () {
    $('td', this).each(function () {
        $(this).find(":input").val("");
        $(this).removeClass("table-warning");
     });
  });
  
  //Remove the score and improvement tips messages.
  $("#displayDefiniteArticleTestScore").text("");
  $("#displayDefiniteArticleTestImprovementTips").text("");
}

function resetPossessivePronounsTest(){
  //Iterate through all the cells in the table, remove the input values and any highlighting.
  $(".t2Cell").each(function () {
    $(this).find(":input").val("");
    $(this).removeClass("table-warning");
  });
  
  //Remove the score and improvement tips messages.
  $("#displayPossessivePronounsTestScore").text("");
  $("#displayPossessivePronounsImprovementTips").text("");
}

//Runs when the page has finished loading.
$(document).ready(function(){
  $("#learnDefiniteArticle").fadeIn();
});
