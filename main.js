// Event listener for the player slider
document.getElementById('playerSlider').addEventListener('input', (event) => {
  const selectedPlayers = event.target.value;
  document.getElementById('playerCount').textContent = `Number of Players: ${selectedPlayers}`;

  const imageSrc = `./img/${selectedPlayers}p.jpg`; // Construct the image filename
  document.getElementById('teamImage').src = imageSrc; // Set the image src attribute
});

// Function for toggling the dropdown menu
function toggleMenu(button) {
  button.nextElementSibling.classList.toggle("show");
}

// Event listener for handling clicks outside the dropdown menu
window.addEventListener('click', function(event) {
  if (!event.target.matches('.menu-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});
// Function to initiate the dropdown menu functionality
window.toggleMenu = toggleMenu;

// On DOM Content Load
document.addEventListener('DOMContentLoaded', () => {
  const playerSlider = document.getElementById('playerSlider');
  const teamImage = document.getElementById('teamImage');
  const playerCount = document.getElementById('playerCount');
  const startButton = document.getElementById('startButton');
  const startingMessage = document.getElementById('startingMessage');

  console.log(teamImage); // Check if the element is successfully retrieved

  function updateTeamImage(value) {
    const imageSrc = `img/${value}p.jpg`;
    teamImage.src = imageSrc;
    playerCount.textContent = `Number of Players: ${value}`;
  }

  updateTeamImage(playerSlider.value);

  playerSlider.addEventListener('input', (event) => {
    const selectedPlayers = event.target.value;
    updateTeamImage(selectedPlayers);
  });

  startButton.addEventListener('click', () => {
    // Fade all elements to black and remove content from PLG after immediate activation
    document.body.style.transition = 'background-color 1.5s ease';
    document.body.style.backgroundColor = 'black';

    setTimeout(() => {
      const pageLayoutGrid = document.getElementById('pageLayoutGrid');
      while (pageLayoutGrid.firstChild) {
        pageLayoutGrid.removeChild(pageLayoutGrid.firstChild);
      }
    }, 1500); // 1.5 seconds for the fade to black

    setTimeout(() => {
      console.log('Start the game after 5 seconds');
      // Add your game start logic here after 5 seconds
    }, 5000); // 5 seconds after Start Button activation

    setTimeout(() => {
      startingMessage.textContent = 'Good luck, everybody.';
      startingMessage.style.display = 'block';
      startingMessage.style.opacity = '1';

      setTimeout(() => {
        startingMessage.style.opacity = '0';
        startingMessage.textContent = '';
      }, 3000); // 3 seconds for the message to fade out
    }, 1500); // 1.5 seconds after Start Button activation for Start Message
  });

});
