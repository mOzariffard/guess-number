// document.querySelector(".message").textContent = "🎉 Correct Number!...";
// document.querySelector(".guess").Value = 23;
// console.log(document.querySelector(".guess").Value);
// else if (guess > secretNumber) {
//   if (score > 0) {
//     document.querySelector(".message").textContent = "📈 To high!...";
//     score--;
//
//   document.querySelector(".score").textContent = score;

//   // when guess too low
// } else if (guess < secretNumber) {
//   if (score > 0) {
//     document.querySelector(".message").textContent = "📉 To low!... ";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent =
//       "💣 You lost the match...";

//     document.querySelector(".score").textContent = 0;
//   }
// }

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    displayMessage("🛑 No Number!...");

    // when plauer wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!...");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 To high!..." : "📉 To low!... ");
    document.querySelector(".score").textContent = score;
    score--;
  } else {
    displayMessage("💣 You lost the match...");

    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
