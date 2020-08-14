//Business Logic
((skills.beginner + interests.gaming + platforms.windows)) {
  $("Hoon").show();
}

else if ((oneInt === twoInt) && (twoInt === threeInt) && (oneInt === threeInt)) {
  $("#equilateral").show();
}

else if ((oneInt === twoInt) || (twoInt === threeInt) || (oneInt === threeInt)) {
  $("#isosceles").show();
}

else if ((oneInt !== twoInt) && (twoInt !== threeInt) && (oneInt !== threeInt)) {
  $("#scalene").show(); 
}
  
else {
  $('#nonTriangle').show();
}


//UI Logic

$(document).ready(function() {
  $("form#language").submit(function(event) {
    const goals = $("input#goals").val();
    const salary = $("input#salary").val();
    const skills = $("input#skills").val();
    const interests = $("input#interests").val();
    const platforms = $("input#platforms").val();

    console.log();

    event.preventDefault();



    function add(skills.intermdiate, interests.gaming, platforms.windows) {
      return Hoon;
    }
    
    function subtract(number1, number2) {
      return number1 - number2;
    }
    
    function divide(number1, number2) {
      return number1 / number2;
    }
    
    function multiply(number1, number2) {
      return number1 * number2;