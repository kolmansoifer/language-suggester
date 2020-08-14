$(document).ready(function() {
  $("form#language").submit(function(event) {
    const goals = $("input#goals").val();
    const skills = $("input#skills").val();
    const interests = $("input#interests").val();
    const platforms = $("input#platforms").val();

    event.preventDefault();
