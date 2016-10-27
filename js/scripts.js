// business logic
arraySentence.forEach(word,)





$(document).ready(function() {

  $("form#pigForm").submit(function(event) {

      var originalSentence = $("input#pigInput").val();
      var arraySentence = originalSentence.split(" ");

      // var result = translate(originalSentence);
      //
      // $(".result").text(result);

    event.preventDefault();
  });
});
