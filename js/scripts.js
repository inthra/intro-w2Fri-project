$(document).ready(function(){
//Vacation Suggester Project ------------------------
  $("form#about-you").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();
    var q5 = $("input:radio[name=question5]:checked").val();

//Branching combination of Question 1,2, and 3 ------------------------
    if (q1 && q2 && q3 && q4 && q5) {
      if (q1 === "city" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Las Vegas");
        $("#result").fadeIn().show();
        $("#spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "beach" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Hawaii");
        $("#result").fadeIn().show();
        $("#spot1, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "nature" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Iceland");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "city" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("New Orleans");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "beach" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("Bali");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "nature" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("Yosemite National Park");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot7, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "city" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("London");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot8, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "beach" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("Cancun, Mexico");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot9, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "nature" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("Iceland and Greenland");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot10, #spot11, #spot12").fadeOut();
      } else if (q1 === "city" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Brisbane, Australia");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot11, #spot12").fadeOut();
      } else if (q1 === "beach" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Costa Rica");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot12").fadeOut();
      } else if (q1 === "nature" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Yellowstone National Park");
        $("#result").fadeIn().show();
        $("#spot1, #spot2, #spot3, #spot4, #spot5, #spot6, #spot7, #spot8, #spot9, #spot10, #spot11").fadeOut();
      }

    } else {
      $("#warning").empty().append("Please Answer All Questions");
    }

//Branching combination of Question 2 and 4 ------------------------
    if (q1 && q2 && q3 && q4 && q5) {
      if (q2 === "high" && q4 === "high") {
        $("#accommodation1").show();
      } else if (q2 === "high" && q4 === "medium") {
        $("#accommodation1").show();
      } else if (q2 === "high" && q4 === "low") {
        $("#accommodation2").show();
      } else if (q2 === "low" && q4 === "high") {
        $("#accommodation1").show();
      } else if (q2 === "low" && q4 === "medium") {
        $("#accommodation1").show();
      } else if (q2 === "low" && q4 === "low") {
        $("#accommodation2").show();
      }

    } else {
      $("#warning").empty().append("Please Answer All Questions");
    }

//Branching combination of Question 3 and 5 ------------------------
    if (q1 && q2 && q3 && q4 && q5) {
      if (q3 === "tourist" && q5 === "one") {
        $("#destination2").empty().append("2nd Option - Istanbul, Turkey");
        $("#result").fadeIn().show();
      } else if (q3 === "tourist" && q5 === "few") {
        $("#destination2").empty().append("2nd Option - Morocco");
        $("#result").fadeIn().show();
      } else if (q3 === "tourist" && q5 === "group") {
        $("#destination2").empty().append("2nd Option - Paris, France");
        $("#result").fadeIn().show();
      } else if (q3 === "traveler" && q5 === "one") {
        $("#destination2").empty().append("2nd Option - Amsterdam");
        $("#result").fadeIn().show();
      } else if (q3 === "traveler" && q5 === "few") {
        $("#destination2").empty().append("2nd Option - Cambodia");
        $("#result").fadeIn().show();
      } else if (q3 === "traveler" && q5 === "group") {
        $("#destination2").empty().append("2nd Option - Italy");
        $("#result").fadeIn().show();
      }

    } else {
      $("#warning").empty().append("Please Answer All Questions");
    }

//Get Additional Information Section ------------------------
    var nameInput = $("input#name").val();
    var emailInput = $("input#email").val();

    if (nameInput && emailInput) {
      $(".name").text(nameInput);
      $(".email").text(emailInput);
      $("#more-info").show();
    }
    
    event.preventDefault();
  });
});
