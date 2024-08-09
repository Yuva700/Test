// Function to increment and display visitor count
function updateVisitorCount() {
    // Get the current count from local storage
    let count = localStorage.getItem('visitorCount');

    // If there's no count yet, start at 0
    if (!count) {
        count = 0;
    }

    // Increment the count
    count++;

    // Save the updated count back to local storage
    localStorage.setItem('visitorCount', count);

    // Display the count on the webpage
    document.getElementById('visitor-count').textContent = count;
}

// Call the function to update and show the count
updateVisitorCount();
