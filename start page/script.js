// Event listener for the "Start" button
document.getElementById('startButton').addEventListener('click', function () {
  const clickSound = document.getElementById('clickSound');
  clickSound.play(); // Play the sound on button click
  
  // Fade out the welcome message and button
  document.querySelector('.welcome-container').style.opacity = '0';
  document.querySelector('.center').style.opacity = '0';

  // Show the next page content with a delay to match the fade transition
  setTimeout(() => {
    document.querySelector('.welcome-container').style.display = 'none';
    document.querySelector('.center').style.display = 'none';
    document.getElementById('nextPage').style.display = 'flex';
    document.getElementById('nextPage').style.opacity = '1';

    // Display the provided image
    const nextPageImage = document.getElementById('nextPageImage');
    nextPageImage.src = 'psyche_asteroid.jpg'; 
    nextPageImage.style.display = 'block';
  }, 500); // Matches the transition duration
});

// Event listener for the "Credits" button
document.getElementById('creditsButton').addEventListener('click', function () {
  const clickSound = document.getElementById('clickSound');
  clickSound.play(); // Play the sound on button click
  document.getElementById('creditsModal').style.display = 'flex';
  document.getElementById('creditsText').textContent = 'Created by Ash Ashour, Aureliano Ceballos, Dillon Garcia, Viet Le and NASA Psyche Team'; 
});

// Close modal if clicked outside of the content
window.onclick = function(event) {
  const modal = document.getElementById('creditsModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
