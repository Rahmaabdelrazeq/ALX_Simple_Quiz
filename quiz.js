/ Function to check the answer when user submits
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if an answer was selected
    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer!";
        return;
    }
    
    // Get the value of the selected answer
    const userAnswer = selectedAnswer.value;
    
    // Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

