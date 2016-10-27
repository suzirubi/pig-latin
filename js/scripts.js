// business logic


$(document).ready(function() {

  $("form#pigForm").submit(function(event) {

    var originalSentence = $("input#pigInput").val();
    var arraySentence = originalSentence.split(" ");
    var oneWord = [];

    for (var count = 0; count < arraySentence.length; count += 1) {
      var oneWord = arraySentence.map(function(count) {
        if (count === "A") {
          return "Aay";
        } else if (count === "a") {
          return "aay";
        } else if (count === "I") {
          return "Iay";
        } else if (count === "i") {
          return "iay";
        } else if (count === "O") {
          return "Oay";
        } else {
          return count;
        }
      });
    }

    var result = oneWord.join(" ");

    $(".result").text(result);

    event.preventDefault();
  });
});
