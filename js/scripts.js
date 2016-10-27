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

    var vowelStart = function (letter) {
    for (var i = 0; i < letter.length; i += 1) {
        console.log(letter[i].charAt(0));
      }
    }

    vowelStart(oneWord);

    console.log(oneWord);

    var result = oneWord.join(" ");

    console.log(result);

    $(".result").text(result);

    event.preventDefault();
  });
});
