function checkAnswer() {
    // Step 1: Declare the correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Step 3: Compare the selected answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
