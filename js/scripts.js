//UI Logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    const goals = $("select#goals").val();
    const salary = $("select#goals").val();
    const skills = $("input:radio[name=skills]:checked").val();
    const interests = $("input:radio[name=interests]:checked").val();
    const platforms = $("input:radio[name=platforms]:checked").val();
  
    if (skills === "beginner") {
      $("#python").show();
    } 
    if (skills === "intermediate") {
      $("#javascript").show();
    } 
    if (skills === "advanced") {
      $("#hoon").show;
    }
  
    }
  
  }




    console.log();

    event.preventDefault();

//Business Logic


