// ARRAY: a list of crypto safety tips
const tips = [
  "Never share your seed phrase with anyone.",
  "Only invest what you can afford to lose.",
  "Double-check wallet addresses before sending.",
  "Use two-factor authentication on your exchange accounts.",
  "Be careful of anyone promising guaranteed profits."
];

let tipIndex = 0;

// IF / ELSE IF / ELSE: greeting based on the time of day
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning! Welcome to CryptoWise.";
} else if (hour < 18) {
  greeting = "Good afternoon! Welcome to CryptoWise.";
} else {
  greeting = "Good evening! Welcome to CryptoWise.";
}

document.getElementById("greeting").textContent = greeting;

// Show the first tip when the page loads
document.getElementById("tip").textContent = tips[0];

// Show the next tip when the button is clicked
document.getElementById("tip-btn").addEventListener("click", function () {
  tipIndex = tipIndex + 1;

  if (tipIndex >= tips.length) {
    tipIndex = 0;
  }

  document.getElementById("tip").textContent = tips[tipIndex];
});
