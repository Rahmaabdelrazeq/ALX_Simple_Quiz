// Function to check the user's answer
function checkAnswer() {
    // The correct answer to the question
    const correctAnswer = "4";

    // Get the selected radio button value
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again.";
        }
    } else {
        // If no answer is selected, prompt the user to choose an answer
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
