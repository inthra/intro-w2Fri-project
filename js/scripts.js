$(document).ready(function(){
//Vacation Suggester Project ------------------------
  $("form#about-you").submit(function(event){
    var q1 = $("input:radio[name=question1]:checked").val();
    var q2 = $("input:radio[name=question2]:checked").val();

    if (q1 === "city") {
      $("#destination").empty().append("New York City");
      $("#result").show();
    } else if (q1 === "beach") {
      $("#destination").empty().append("Bahamas");
      $("#result").show();
    } else  {
      $("#destination").empty().append("Iceland");
      $("#result").show();
    }

    event.preventDefault();
  });
});

//$("#celebrity").empty().append(name);
//$("#your-date").show();
