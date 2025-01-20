

function checkAnswer() {
    const correctAnswer = "4";
    
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    const feedbackElement = document.getElementById('feedback');
    
    if (!selectedAnswer) {
        feedbackElement.textContent = "Please select an answer!";
        return;
    }
    
    const userAnswer = selectedAnswer.value;
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);



