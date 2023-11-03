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

// Assuming "restartGame" is the ID of the Restart menu option
const restartOption = document.getElementById('restartGame');

restartOption.addEventListener('click', () => {
  // Perform actions to restart the app here
  location.reload(); // Reload the page to simulate a restart
});


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

  // Function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

  // Function to generate a random name for players
  const names = [
    "Adela", "Aidan", "Alessia", "Ami", "Amira",
    "Anton", "Auntie", "Ayla", "Banoub","Celine", "Charlie",
    "David", "Elena", "Emre", "Eren", "Eve",
    "Frank", "Grace", "Hanna", "Henry", "Isaac",
    "Ivan",  "Julia", "Kevin", "Leyla", "Liam",
    "Lina", "Luca", "Lucas", "Luna", "Mateo",
    "Maya", "Mia", "Milan", "Mohammad", "Nadia",
    "Nana", "Nathan", "Noah", "Oliver", "Olivia",
    "Oscar", "Paul", "Quinn", "Rachel", "Sakura",
    "Sam", "Sebastian", "Selena", "Sofia", "Sora",
    "Theo", "Tina", "Ursula", "Victor", "Wendy",
    "Xander", "Yasmine", "Yolanda", "Yvonne", "Zach", "Zara"
  ];

  function getRandomName() {
    if (names.length === 0) return "No more names";
    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    names.splice(randomIndex, 1); // Remove the used name from the array
    return name;
  }

  function addPlayerImage(playerBoardIndex) {
    const playerBoard = document.getElementsByClassName('player-board')[playerBoardIndex];
    const image = document.createElement('img');
    image.src = `./img/portraits/${names[playerBoardIndex]}.jpg`; // Assuming image names are identical to the names in the 'names' array
    image.width = 386;
    image.height = 386;
    playerBoard.insertBefore(image, playerBoard.secondChild);
  }

// Function to create player boards with random attributes
function createPlayerBoards() {
  const container = document.getElementById("playerBoardsContainer");
  const playerSlider = document.getElementById("playerSlider");
  const numberOfPlayers = parseInt(playerSlider.value); // Get the value from the player slider

  container.innerHTML = ''; // Clear the container

  for (let i = 1; i <= numberOfPlayers; i++) {
      const playerBoard = document.createElement("div");
      playerBoard.classList.add("player-board");

      // Generate random name and attributes for each player
      const playerName = getRandomName();
      const brains = getRandomInt(3, 6);
      const smarts = getRandomInt(3, 6);
      const wits = getRandomInt(3, 6);
      const charm = getRandomInt(3, 6);

      // HTML content for the player board
      playerBoard.innerHTML = `
          <h3>${playerName}</h3>
          <div class="attribute">
              <span>Brains:</span>
              <span class="brains-value">${brains}</span>
          </div>
          <div class="attribute">
              <span>Smarts:</span>
              <span class="smarts-value">${smarts}</span>
          </div>
          <div class="attribute">
              <span>Wits:</span>
              <span class="wits-value">${wits}</span>
          </div>
          <div class="attribute">
              <span>Charm:</span>
              <span class="charm-value">${charm}</span>
          </div>
      `;

      container.appendChild(playerBoard);
  }

  // Use addPlayerImage function for each player board
  for (let i = 0; i < numberOfPlayers; i++) {
    addPlayerImage(i);
  }
}

  // Event listener for the player slider
  //document.getElementById('playerSlider').addEventListener('input', createPlayerBoards);

  startButton.addEventListener('click', () => {
    // Initial creation of player boards
    createPlayerBoards();

    // remove content from PLG after immediate activation
    const pageLayoutGrid = document.getElementById('pageLayoutGrid');
    while (pageLayoutGrid.firstChild) {
      pageLayoutGrid.removeChild(pageLayoutGrid.firstChild);
    }



    const imageContainer = document.getElementById('imageContainer');
    imageContainer.remove();

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
