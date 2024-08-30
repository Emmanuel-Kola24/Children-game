let currentImageIndex = 0;
let timeoutId, intervalId;
let images = ['bat.png', 'cat.png', 'dog.png']; // Array of image filenames
let words = ['bat', 'cat', 'dog']; // Corresponding words to spell
let userSpelling = '';

function startGame() {
    showImage();
}

function showImage() {
    if (currentImageIndex < images.length) {
        displayImage(images[currentImageIndex]);
        userSpelling = ''; // Reset spelling for new image
        timeoutId = setTimeout(nextImage, 60000); // Move to the next image after 1 minute
        intervalId = startCountdown(); // Optional: display a countdown timer
    } else {
        endGame();
    }
}

function displayImage(image) {
    // Display image and alphabets on the screen
    document.getElementById('image').src = image;
    // Display the alphabet choices for the learner
    displayAlphabets();
}

function displayAlphabets() {
    // Function to display the alphabet buttons
}

function handleLetterClick(letter) {
    userSpelling += letter;
    updateSpellingBox();
    
    if (userSpelling === words[currentImageIndex]) {
        clearTimeout(timeoutId); // Cancel the timeout if correct word is spelled
        setTimeout(nextImage, 1000); // Show the next image after a short delay
    }
}

function nextImage() {
    clearInterval(intervalId); // Stop the countdown timer
    currentImageIndex++;
    showImage();
}

function startCountdown() {
    let remainingTime = 60;
    return setInterval(() => {
        remainingTime--;
        updateCountdown(remainingTime);
        if (remainingTime === 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}

function updateSpellingBox() {
    document.getElementById('spelling-box').innerText = userSpelling;
}

function updateCountdown(time) {
    document.getElementById('countdown').innerText = time + 's';
}

function endGame() {
    // Display the learner's spelling report
    displayReport();
}

function displayReport() {
    // Function to generate and display the report based on user input
}
