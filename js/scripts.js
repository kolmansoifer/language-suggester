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

//Business Logic

if (skills) {
  let beginner = hoon;
$("#hoon").show();
} 

});