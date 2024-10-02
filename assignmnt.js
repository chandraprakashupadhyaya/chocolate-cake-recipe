// Toggle ingredients visibility
document.getElementById("toggle-ingredients").addEventListener("click", function() {
    const ingredients = document.getElementById("ingredients");
    ingredients.classList.toggle("hidden");
    this.textContent = ingredients.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

// Start Cooking functionality
document.getElementById("start-cooking").addEventListener("click", function() {
    const steps = document.getElementById("steps");
    steps.classList.remove("hidden"); // Ensure steps are visible
    highlightNextStep(0); // Start highlighting from the first step
});

// Highlight steps one by one
function highlightNextStep(stepIndex) {
    const steps = document.querySelectorAll("#steps li");
    if (stepIndex < steps.length) {
        // Remove highlight from all steps
        steps.forEach(step => step.classList.remove("highlighted"));
        // Highlight the current step
        steps[stepIndex].classList.add("highlighted");

        // Move to the next step after a delay
        setTimeout(() => {
            highlightNextStep(stepIndex + 1);
        }, 2000); // Adjust timing to 2 seconds per step
    } else {
        // Once all steps are done, show success message
        showSuccessMessage();
    }
}

// Show the success message and image when the recipe is cooked
function showSuccessMessage() {
    // Clear the current content
    document.body.innerHTML = '';

    // Create success message
    const successMessage = document.createElement('h1');
    successMessage.textContent = "Successfully cooked! Here you go:";
    successMessage.className = "success-message"; // Apply success message styling
    successMessage.style.textAlign = 'center'; // Center the success message
    document.body.appendChild(successMessage);

    // Add image
    const image = document.createElement('img');
    image.src = 'https://bakewithzoha.com/wp-content/uploads/2023/01/chocolate-cake-side-scaled.jpg'; // Replace with the actual image URL
    image.alt = 'Cooked Dish';
    image.className = 'success-image'; // Apply image styling
    image.style.display = 'block'; // Ensure the image behaves as a block element
    image.style.margin = '20px auto'; // Center the image with auto margins
    document.body.appendChild(image);

    // Add personal message
    const personalMessage = document.createElement('p');
    personalMessage.textContent = "";
    personalMessage.className = "made-by"; // Apply personal message styling
    personalMessage.style.textAlign = 'center'; // Center the personal message
    document.body.appendChild(personalMessage);
}

// Timer functionality (optional bonus)
let timeLeft = 45;
const timerDisplay = document.createElement("p");
timerDisplay.style.textAlign = 'center'; // Center the timer display
document.body.appendChild(timerDisplay);

function startTimer() {
    const interval = setInterval(function() {
        if (timeLeft > 0) {
            timerDisplay.textContent = `Time left: ${timeLeft} minutes`;
            timeLeft--;
        } else {
            clearInterval(interval);
            timerDisplay.textContent = "Time's up!";
        }
    }, 60000);
}

document.getElementById("start-cooking").addEventListener("click", startTimer);
