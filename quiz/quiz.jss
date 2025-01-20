// Define the checkAnswer function
function checkAnswer() {
    // Correct answer for the quiz
    const correctAnswer = "4";
    
    // Retrieve the selected answer from the radio buttons
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if the user has selected an answer
    if (!userAnswer) {
        // If no answer is selected, show an alert
        alert("Please select an answer!");
        return;
    }
    
    // Compare the user's answer with the correct answer
    if (userAnswer.value === correctAnswer) {
        // If correct, display success message
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If incorrect, display failure message
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
