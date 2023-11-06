
import {
  names,
  roles,
  roleDescriptions,
  archetypes,
  archetypeDescriptions,
  playerColors,
} from './characterData.js';

const playerDetails = [];

// Function to generate a random integer within a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event listener for the player slider
document.getElementById('playerSlider').addEventListener('input', (event) => {

  const selectedPlayers = event.target.value;
  document.getElementById('playerCounter').textContent = `Number of Players: ${selectedPlayers}`;

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
const restartOption = document.getElementById('restartGame2');
restartOption.addEventListener('click', () => {
  // Perform actions to restart the app here
  location.reload(); // Reload the page to simulate a restart
});


// function to populate the playerDetails array
function populatePlayerDetails(numberOfPlayers) {

  for (let i = 0; i < numberOfPlayers; i++) {
    // i is TIMES THROUGH THE LOOP
    // j is the index number of the randomizer player number

      const j = getRandomInt(0,63);
      // console.log('j = ' + j)

      const meepleName = names[j]; // Assuming "names" contains the list of unique player names
      // console.log('meepleName = ' + meepleName);

      const roleIndex = (j) % roles.length; // Cycling through roles based on the name's index
      // console.log('roleIndex = ' + roleIndex);

      const role = roles[roleIndex];
      // console.log('role = ' + role);

      const roleDescriptionIndex = j % roleDescriptions.length;
      // console.log('roleDescriptionIndex = ' + roleDescriptionIndex);

      const roleDescription = roleDescriptions[roleDescriptionIndex];
      // console.log('roleDescription = ' + roleDescription);

      const archetypesForRole = archetypes[roleIndex];
      // console.log('archetypesForRole = ' + archetypesForRole);

      const archetypeIndex = (j) % archetypesForRole.length; // Cycling through archetypes based on the name's index
      // console.log('archetypeIndex = ' + archetypeIndex);

      const archetype = archetypesForRole[archetypeIndex];
      // console.log('archetype = ' + archetype);

      const imageSrc = `./img/portraits/${meepleName}.jpg`; // Assuming images are named after player names
      // console.log('imageSrc = ' + imageSrc);

      playerDetails.push({
          name: meepleName,
          color: playerColors[i],
          attributes: {
              brains: getRandomInt(3, 6),
              smarts: getRandomInt(3, 6),
              wits: getRandomInt(3, 6),
              charm: getRandomInt(3, 6)
          },
          role: role,
          roleDescription: roleDescription, // Assuming "roleDescription" array contains role descriptions
          archetype: archetype,
          archetypeDescription: archetypeDescriptions[roleIndex][archetypeIndex],
          image: imageSrc // Assign the image source to the player's details
      });
  }
}

// Function to create player boards
function createPlayerBoards(numberOfPlayers) {

  // Logic to fetch or generate playerDetails based on the number of players
  populatePlayerDetails(numberOfPlayers);
  // console.log('playerDetails.length = ' + playerDetails.length);


  let pIndex = 1;

  playerDetails.slice(0, numberOfPlayers).forEach(player => {

    // Create and render player boards with the information from the player object
    // This depends on your UI framework or DOM structure

    const playerBoard = document.createElement('div');
    playerBoard.className = 'player-board';

    // Add the character's name (characterName)
    const characterName = document.createElement('div');
    characterName.textContent = player.name;
    playerBoard.appendChild(characterName);

    // Add a colored circle (characterCircle) in the top right corner
    const characterCircle = document.createElement('div');
    characterCircle.classList.add('character-circle'); // Adding a class for the circular shape
    characterCircle.style.backgroundColor = player.color;; // Set the color based on player's meeple color

    // Add a number to the characterCircle (characterNumber)
    const characterNumber = document.createElement('span');
    characterNumber.classList.add('character-number');
    const playerIndex = pIndex++;
    characterNumber.textContent = playerIndex;

    characterCircle.appendChild(characterNumber);
    playerBoard.appendChild(characterCircle);

    // Add the player image
    const playerImage = document.createElement('img');
    playerImage.src = player.image; // Set the image source
    playerImage.alt = player.name; // Alt text for accessibility
    playerBoard.appendChild(playerImage);

    // Add role and description
    const role = document.createElement('div');
    role.textContent = `Role: ${player.role}`;
    playerBoard.appendChild(role);

    const roleDescription = document.createElement('div');
    roleDescription.textContent = `Role Description: ${player.roleDescription}`;
    playerBoard.appendChild(roleDescription);

    // Add archetype and description
    const archetype = document.createElement('div');
    archetype.textContent = `Archetype: ${player.archetype}`;
    playerBoard.appendChild(archetype);

    const archetypeDescription = document.createElement('div');
    archetypeDescription.textContent = `Archetype Description: ${player.archetypeDescription}`;
    playerBoard.appendChild(archetypeDescription);

    // Add player attributes
    const attributes = document.createElement('div');
    attributes.textContent = `Attributes: Brains: ${player.attributes.brains}, Smarts: ${player.attributes.smarts}, Wits: ${player.attributes.wits}, Charm: ${player.attributes.charm}`;
    playerBoard.appendChild(attributes);

// MEEPLE START
    // Create the meeple element and associate its attributes with playerDescription
    const meeple = document.createElement('div');
    meeple.classList.add('meeple');

    // Create a meeple-content element to hold all the content within the meeple
    const meepleContent = document.createElement('div');
    meepleContent.classList.add('meeple-content');
    meeple.appendChild(meepleContent);

    // Add the character's name (meepleName)
    const meepleName = document.createElement('div');
    meepleName.textContent = player.name;
    meepleContent.appendChild(meepleName);

    // Add a colored circle (meepleCircle) in the top right corner
    const meepleCircle = document.createElement('div');
    meepleCircle.classList.add('meeple-circle'); // Adding a class for the circular shape
    meepleCircle.style.backgroundColor = player.color;; // Set the color based on player's meeple color

    // Add a number to the meepleCircle (meepleNumber)
    const meepleNumber = document.createElement('span');
    meepleNumber.classList.add('meeple-number');

    meepleNumber.textContent = playerIndex;

    meepleCircle.appendChild(meepleNumber);
    meepleContent.appendChild(meepleCircle);

    // Add the player image
    const meepleImage = document.createElement('img');
    meepleImage.src = player.image; // Set the image source
    meepleImage.alt = player.name; // Alt text for accessibility
    meepleContent.appendChild(meepleImage);

    playerBoard.appendChild(meeple);


  // END MEEPLE

    // Append the player board to the main container
    document.getElementById('playerBoardsContainer').appendChild(playerBoard);

    // give the meeples functionality
    initializeMeeples();
  });
}

// function to add listeners to meeples
function initializeMeeples(){
  // Code to handle drag and drop functionality
  const meepleElements = document.querySelectorAll('.meeple');

  meepleElements.forEach((meeple) => {
      meeple.addEventListener('dragstart', (event) => {
          event.dataTransfer.setData('text/plain', meeple.id);
          event.dataTransfer.setDragImage(meeple, 0, 0);
          event.target.style.opacity = '0.5';
      });

      meeple.addEventListener('dragend', (event) => {
          event.target.style.opacity = '1';
      });
  });

  document.addEventListener('dragover', (event) => {
      event.preventDefault();
  });

  document.addEventListener('drop', (event) => {
      event.preventDefault();
      const droppedMeepleId = event.dataTransfer.getData('text/plain');
      const droppedMeeple = document.getElementById(droppedMeepleId);

      if (droppedMeeple) {
          const x = event.clientX;
          const y = event.clientY;
          droppedMeeple.style.position = 'fixed';
          droppedMeeple.style.left = `${x}px`;
          droppedMeeple.style.top = `${y}px`;
      }
  });

}


// On DOM Content Load
document.addEventListener('DOMContentLoaded', () => {
  const playerSlider = document.getElementById('playerSlider');
  const teamImage = document.getElementById('teamImage');
  const playerCounter = document.getElementById('playerCounter');
  const startButton = document.getElementById('startButton');
  const startingMessage = document.getElementById('startingMessage');
  const container = document.getElementById('playerBoardsContainer');

  function updateTeamImage(value) {
    const imageSrc = `img/${value}p.jpg`;
    teamImage.src = imageSrc;
    playerCounter.textContent = `Number of Players: ${value}`;
  }

  updateTeamImage(playerSlider.value);

  playerSlider.addEventListener('input', (event) => {
    updateTeamImage(playerSlider.value);
  });



// Event listener for the player slider
document.getElementById('startButton').addEventListener('click', () => {

  // remove content from PLG after immediate activation
  const pageLayoutGrid = document.getElementById('pageLayoutGrid');
  while (pageLayoutGrid.firstChild) {
    pageLayoutGrid.removeChild(pageLayoutGrid.firstChild);
  }

  // remove the team image
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.remove();

  // create the player boards
  createPlayerBoards(playerSlider.value);

  });

});
