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
    window.location.href = 'asteroid.html';
  }, 500); // Matches the transition duration
});

// Event listener for the "Credits" button
document.getElementById('creditsButton').addEventListener('click', function () {
  const clickSound = document.getElementById('clickSound');
  clickSound.play(); // Play the sound on button click
  document.getElementById(
    'creditsText'
  ).innerHTML = `Disclaimer: This work was created in partial fulfillment of Arizona State University Capstone Course #66945.<br>
        The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (<a href="https://psyche.asu.edu" target="_blank">https://psyche.asu.edu</a>).<br>
        “Psyche: A Journey to a Metal World” [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets.<br>
        Trade names and trademarks of ASU and NASA are used in this work for identification only.<br>
        Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration.<br>
        The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.<br><br>
        Developers: Ash Ashour, Aureliano Ceballos, Dillon Garcia, Viet Le, and the NASA Psyche Team`;
  document.getElementById('creditsModal').style.display = 'flex';
});

// Close modal if clicked outside of the content
window.onclick = function (event) {
  const modal = document.getElementById('creditsModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
