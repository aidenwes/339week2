// Get the current date
function getCurrentDate() {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return currentDate.toLocaleDateString('en-US', options);
}

// Display the current date on the page
function displayDate() {
    const currentDate = getCurrentDate();
    const dateElement = document.createElement('p');
    dateElement.textContent = 'Today\'s date: ' + currentDate;

    // Append the date element to the main content area
    const mainContent = document.getElementById('main');
    mainContent.appendChild(dateElement);
}

// Call the function to display the date when the page is loaded
window.onload = function() {
    displayDate();
};