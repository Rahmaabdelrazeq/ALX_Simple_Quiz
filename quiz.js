// Function to check the user's answer
function checkAnswer() {
    // The correct answer for the question
    const correctAnswer = "4";
    
    // Retrieve the selected radio button using querySelector
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // If no answer is selected, return early
    if (!selectedAnswer) {
        document.getElementById('feedback').textContent = "Please select an answer!";
        return;
    }

    // Retrieve the value of the selected answer
    const userAnswer = selectedAnswer.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
