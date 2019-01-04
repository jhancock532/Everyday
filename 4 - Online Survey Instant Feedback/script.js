let studentsAtUoB = 22278; //According to google, stat from 2015.

// Chart.js Chart Data //
let questionOneResultsChartContext = document.getElementById("questionOneResultsChart").getContext('2d');
let questionOneChart = new Chart(questionOneResultsChartContext, {
    type: 'horizontalBar',
    data: {
        labels: ["Daily", "Several times a week", "Once a week", "Once a fortnight", "Once a month", "Every couple of months", "A couple of times a year", "Never"],
        datasets: [{
            label: '% of students',
            data: [6, 27, 15, 11, 10, 12, 7, 13],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

let questionTwoResultsChartContext = document.getElementById("questionTwoResultsChart").getContext('2d');
let questionTwoChart = new Chart(questionTwoResultsChartContext, {
    type: 'horizontalBar',
    data: {
        labels: ["After each new sexual partner", "Only if I have symptoms of an STI/STD", "Only if I feel there is a risk", "Once a month", "Once every couple of months", "Twice a year", "Once a year", "Less regularly than once a year","I've never been tested"],
        datasets: [{
            label: '% of students',
            data: [23, 4, 11, 0, 4, 3, 5, 9, 41],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

let questionThreeResultsChartContext = document.getElementById("questionThreeResultsChart").getContext('2d');
let questionThreeChart = new Chart(questionThreeResultsChartContext, {
    type: 'horizontalBar',
    data: {
        labels: ["Monogamous relationship, one partner", "Non-monogamous relationship, primary partner", "Non-monogamous relationship, multiple partners", "Casually dating one person", "Casually dating more than one person", "Friends with benefits", "Not currently in a relationship", "Other"],
        datasets: [{
            label: '% of students',
            data: [51, 2, 1, 10, 2, 8, 33, 1],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

function questionOne(choice){
  $('#questionOne').hide();
  $('#questionOneResults').fadeIn();
  
  questionOneChart.data.datasets[0].backgroundColor[choice] = 'rgba(20, 20, 20, 0.2)';
  questionOneChart.data.datasets[0].borderColor[choice] = 'rgba(20, 20, 20, 1)';
  questionOneChart.update();
  
  let optionChosen, fellowsFromSample, fellowsFromUniversity;
  
  switch(choice){
    case 0:
      optionChosen = '"Daily"';
      fellowsFromSample = Math.floor(568 * 0.06);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.06);
      break;
    case 1:
      optionChosen = '"Several times a week"';
      fellowsFromSample = Math.floor(568 * 0.27);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.27);
      break;
    case 2:
      optionChosen = '"Once a week"';
      fellowsFromSample = Math.floor(568 * 0.15);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.15);
      break;
    case 3:
      optionChosen = '"Once a fortnight"';
      fellowsFromSample = Math.floor(568 * 0.11);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.11);
      break;
    case 4:
      optionChosen = '"Once a month"';
      fellowsFromSample = Math.floor(568 * 0.10);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.10);
      break;
    case 5:
      optionChosen = '"Every couple of months"';
      fellowsFromSample = Math.floor(568 * 0.12);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.12);
      break;
    case 6:
      optionChosen = '"A couple of times a year"';
      fellowsFromSample = Math.floor(568 * 0.07);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.07);
      break;
    case 7:
      optionChosen = '"Never"';
      fellowsFromSample = Math.floor(568 * 0.13);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.13);
      break;
  }
  let descriptionText = "In answering " + optionChosen + " you're with a group of " + fellowsFromSample +" people from the sample of 568. Extrapolating the survey result to the entire university student population, you'd be with a group of " + fellowsFromUniversity + " people.";
  $('#questionOneResultsDescription').text(descriptionText);
  
 // $("body").animate({scrollTop: $("#questionOneResults").offset().top});
  $('html, body').animate({
      scrollTop: $("#questionOneResults").offset().top - 10
  }, 1000);
}

function questionTwo(choice){
  $('#questionTwo').hide();
  $('#questionTwoResults').fadeIn();
  
  questionTwoChart.data.datasets[0].backgroundColor[choice] = 'rgba(20, 20, 20, 0.2)';
  questionTwoChart.data.datasets[0].borderColor[choice] = 'rgba(20, 20, 20, 1)';
  questionTwoChart.update();
  
  let optionChosen, fellowsFromSample, fellowsFromUniversity;
  
  switch(choice){
    case 0:
      optionChosen = '"After each new sexual partner"';
      fellowsFromSample = Math.floor(552 * 0.23);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.23);
      break;
    case 1:
      optionChosen = '"Only if I have symptoms of an STI/STD"';
      fellowsFromSample = Math.floor(552 * 0.04);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.04);
      break;
    case 2:
      optionChosen = '"Only if I feel there is a risk"';
      fellowsFromSample = Math.floor(552 * 0.11);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.11);
      break;
    case 3:
      optionChosen = '"Once a month"';
      fellowsFromSample = Math.floor(552 * 0.0);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.0);
      break;
    case 4:
      optionChosen = '"Once every couple of months"';
      fellowsFromSample = Math.floor(552 * 0.04);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.04);
      break;
    case 5:
      optionChosen = '"Twice a year"';
      fellowsFromSample = Math.floor(552 * 0.03);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.03);
      break;
    case 6:
      optionChosen = '"Once a year"';
      fellowsFromSample = Math.floor(552 * 0.05);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.05);
      break;
    case 7:
      optionChosen = '"Less regularly than once a year"';
      fellowsFromSample = Math.floor(552 * 0.09);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.09);
      break;
    case 8:
      optionChosen = '"I have never been tested"';
      fellowsFromSample = Math.floor(552 * 0.41);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.41);
      break;
  }
  
  let descriptionText = "In answering " + optionChosen + " you're with a group of " + fellowsFromSample +" people from the sample of 552. Extrapolating the survey result to the entire university student population, you'd be with a group of " + fellowsFromUniversity + " people.";
  $('#questionTwoResultsDescription').text(descriptionText);
  
  $('html, body').animate({
      scrollTop: $("#questionTwoResults").offset().top - 10
  }, 1000);
}

function questionThree(choice){
  $('#questionThree').hide();
  $('#questionThreeResults').fadeIn();
  
  questionThreeChart.data.datasets[0].backgroundColor[choice] = 'rgba(20, 20, 20, 0.2)';
  questionThreeChart.data.datasets[0].borderColor[choice] = 'rgba(20, 20, 20, 1)';
  questionThreeChart.update();
  
  let optionChosen, fellowsFromSample, fellowsFromUniversity;
  
  switch(choice){
    case 0:
      optionChosen = '"A monogamous relationship with one person"';
      fellowsFromSample = Math.floor(631 * 0.51);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.51);
      break;
    case 1:
      optionChosen = '"Non-monogamous relationship with a primary partner"';
      fellowsFromSample = Math.floor(631 * 0.02);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.02);
      break;
    case 2:
      optionChosen = '"Non-monogamous relationship with multiple partners"';
      fellowsFromSample = Math.floor(631 * 0.01);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.01);
      break;
    case 3:
      optionChosen = '"Casually dating one person"';
      fellowsFromSample = Math.floor(631 * 0.10);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.10);
      break;
    case 4:
      optionChosen = '"Casually dating more than one person"';
      fellowsFromSample = Math.floor(631 * 0.02);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.02);
      break;
    case 5:
      optionChosen = '"Friends with benefits"';
      fellowsFromSample = Math.floor(631 * 0.08);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.08);
      break;
    case 6:
      optionChosen = '"Not currently in a relationship"';
      fellowsFromSample = Math.floor(631 * 0.33);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.33);
      break;
    case 7:
      optionChosen = '"Other"';
      fellowsFromSample = Math.floor(631 * 0.01);
      fellowsFromUniversity = Math.floor(studentsAtUoB * 0.01);
      break;
  }
  
  let descriptionText = "In answering " + optionChosen + " you're with a group of " + fellowsFromSample +" people from the sample of 631. Extrapolating the survey result to the entire university student population, you'd be with a group of " + fellowsFromUniversity + " people.";
  $('#questionThreeResultsDescription').text(descriptionText);
  
  $('html, body').animate({
      scrollTop: $("#questionThreeResults").offset().top - 10
  }, 1000);
}

function scrollToFirstQuestion(){
  $('html, body').animate({
      scrollTop: $("#questionOne").offset().top - 200
  }, 1000);
}

function scrollToSecondQuestion(){
  $('html, body').animate({
      scrollTop: $("#questionTwo").offset().top - 200
  }, 1000);
}

function scrollToThirdQuestion(){
  $('html, body').animate({
      scrollTop: $("#questionThree").offset().top - 200
  }, 1000);
}

$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeIn').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});
