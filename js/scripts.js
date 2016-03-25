$(document).ready(function(){
//Vacation Suggester Project ------------------------
  $("form#about-you").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();
    var q3 = $("input:radio[name=question3]:checked").val();
    var q4 = $("input:radio[name=question4]:checked").val();

//Branching combination of Question 1,2, and 3 ------------------------
    if (q1 && q2 && q3 && q4) {
      if (q1 === "city" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Las Vegas");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Hawaii");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "high" && q3 === "tourist") {
        $("#destination").empty().append("Iceland");
        $("#result").show();
      } else if (q1 === "city" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("New Orleans");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("Bali");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "low" && q3 === "tourist") {
        $("#destination").empty().append("Yosemite National Park");
        $("#result").show();
      } else if (q1 === "city" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("London");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("Cancun, Mexico");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "high" && q3 === "traveler") {
        $("#destination").empty().append("Iceland and Greenland");
        $("#result").show();
      } else if (q1 === "city" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Brisbane, Australia");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Costa Rica");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "low" && q3 === "traveler") {
        $("#destination").empty().append("Yellowstone National Park");
        $("#result").show();
      }

    } else {
      $("#warning").empty().append("Please Answer All Questions");
    }

//Branching combination of Question 2 and 4 ------------------------
    if (q1 && q2 && q3 && q4) {
      if (q2 === "high" && q4 === "high") {
        $("#accommodation").empty().append("Hotel1");
        $("#result").show();
      } else if (q2 === "high" && q4 === "medium") {
        $("#accommodation").empty().append("Hotel2");
        $("#result").show();
      } else if (q2 === "high" && q4 === "low") {
        $("#accommodation").empty().append("Hotel3");
        $("#result").show();
      } else if (q2 === "low" && q4 === "high") {
        $("#accommodation").empty().append("Hotel4");
        $("#result").show();
      } else if (q2 === "low" && q4 === "medium") {
        $("#accommodation").empty().append("Hotel5");
        $("#result").show();
      } else if (q2 === "low" && q4 === "low") {
        $("#accommodation").empty().append("Hotel6");
        $("#result").show();
      }

    } else {
      $("#warning").empty().append("Please Answer All Questions");
    }

    event.preventDefault();
  });
});

//$("#celebrity").empty().append(name);
//$("#your-date").show();
