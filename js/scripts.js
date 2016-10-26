$(document).ready(function() {

  $("form#pigForm").submit(function(event) {

      var originalSentence = $("input#pigInput").val();
      var result = originalSentence.toUpperCase();
      //var result = translate(originalSentence);

      $(".result").text(result);


    event.preventDefault();
  });
});
