
// Event listener for the player slider
document.getElementById('playerSlider').addEventListener('input', (event) => {
  const selectedPlayers = event.target.value;
  document.getElementById('playerCount').textContent = `Number of Players: ${selectedPlayers}`;

  const imageSrc = `./img/${selectedPlayers}p.jpg`; // Construct the image filename
  document.getElementById('playerImage').src = imageSrc; // Set the image src attribute
});

document.addEventListener('DOMContentLoaded', () => {
  const playerSlider = document.getElementById('playerSlider');
  const playerImage = document.getElementById('playerImage');
  const playerCount = document.getElementById('playerCount');
  const startButton = document.getElementById('startButton');
  const startingMessage = document.getElementById('startingMessage');

  function updatePlayerImage(value) {
    const imageSrc = `img/${value}p.jpg`;
    playerImage.src = imageSrc;
    playerCount.textContent = `Number of Players: ${value}`;
  }

  updatePlayerImage(playerSlider.value);

  playerSlider.addEventListener('input', (event) => {
    const selectedPlayers = event.target.value;
    updatePlayerImage(selectedPlayers);
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


