
// Event listener for the player slider
document.getElementById('playerSlider').addEventListener('input', (event) => {
  const selectedPlayers = event.target.value;
  document.getElementById('playerCount').textContent = `Number of Players: ${selectedPlayers}`;

  const imageSrc = `${selectedPlayers}p.jpg`; // Construct the image filename
  document.getElementById('playerImage').src = imageSrc; // Set the image src attribute
});

