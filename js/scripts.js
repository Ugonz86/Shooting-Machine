$(function() {
  $(".form-inline").submit(function(event) {
    var userInput = $("input#userInput").val();

    $(".userInput").text(userInput.toUpperCase());

    $("#response").show();

    event.preventDefault();
  });
});
