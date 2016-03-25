$(document).ready(function(){
//Vacation Suggester Project ------------------------
  $("form#about-you").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();

    if (q1 && q2) {
      if (q1 === "city" && q2 === "yes") {
        $("#destination").empty().append("Las Vegas");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "yes") {
        $("#destination").empty().append("Hawaii");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "yes") {
        $("#destination").empty().append("Iceland");
        $("#result").show();
      } else if (q1 === "city" && q2 === "no") {
        $("#destination").empty().append("New Orleans");
        $("#result").show();
      } else if (q1 === "beach" && q2 === "no") {
        $("#destination").empty().append("Bali");
        $("#result").show();
      } else if (q1 === "nature" && q2 === "no") {
        $("#destination").empty().append("Yosemite National Park");
        $("#result").show();
      }

    } else {
      $("#destination").empty().append("Please Answer All Questions");
      $("#result").show();
    }

    event.preventDefault();
  });
});

//$("#celebrity").empty().append(name);
//$("#your-date").show();
