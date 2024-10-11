// JavaScript File: script.js

// Event listener for the "Start" button
document.getElementById('startButton').addEventListener('click', function () {
  document.querySelector('.welcome-container').style.display = 'none'; // Hide the welcome message
  document.querySelector('.center').style.display = 'none'; // Hide the button
  document.getElementById('nextPage').style.display = 'flex'; // Show the next page content
});
