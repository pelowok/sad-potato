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
    startingMessage.textContent = 'Good luck, everybody.';
    startingMessage.style.display = 'block';

    setTimeout(() => {
      startingMessage.style.opacity = '1';
      setTimeout(() => {
        startingMessage.style.opacity = '0';
        startingMessage.textContent = '';
      }, 2000);
    }, 100);
  });
});


