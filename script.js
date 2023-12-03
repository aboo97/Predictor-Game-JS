document.addEventListener('DOMContentLoaded', function() {
  // Your code here

  // Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Number of attempts
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById("guess").value);
  
  // Increase the number of attempts
  attempts++;

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    // Display success message with the number of attempts
    document.getElementById("message").textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
    // Disable the input field and button
    document.getElementById("guess").disabled = true;
    document.getElementById("submit").disabled = true;
  } else if (userGuess < randomNumber) {
    // Display a hint message - the guessed number is too low
    document.getElementById("message").textContent = "Try a higher number.";
  } else {
    // Display a hint message - the guessed number is too high
    document.getElementById("message").textContent = "Try a lower number.";
  }
  
  // Clear the input field for the next guess
  document.getElementById("guess").value = "";
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", checkGuess);

});


