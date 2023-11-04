
import {
  names,
  uniqueNames,
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




// function populatePlayerDetails(numberOfPlayers) {

//     // const roles = ['Criminal Mastermind', 'Ninja', 'Bomb Technician', 'Smooth Talker', 'Cyber-Genius', 'Race Car Driver', 'Muscleman', 'Field Medic'];

//     for (let i = 0; i < numberOfPlayers; i++) {
//         const playerName = names[i]; // Assuming "names" contains the list of unique player names
//         const roleIndex = i % roles.length; // Cycling through roles based on the name's index
//         const role = roles[roleIndex];
//         const roleDescription = roleDescriptions[roleIndex];
//         const archetypesForRole = archetypes[roleIndex];
//         const archetypeIndex = i % archetypesForRole.length; // Cycling through archetypes based on the name's index
//         const archetype = archetypesForRole[archetypeIndex];
//         const imageSrc = `./img/portraits/${playerName}.jpg`; // Assuming images are named after player names
//         const meepleColor = playerColors[i];

//         playerDetails.push({
//             name: playerName,
//             color: meepleColor, // Assign the color square based on the sequence of playerColor[]
//             attributes: {
//                 brains: getRandomInt(3, 6),
//                 smarts: getRandomInt(3, 6),
//                 wits: getRandomInt(3, 6),
//                 charm: getRandomInt(3, 6)
//             },
//             role: role,
//             roleDescription: roleDescription,
//             archetype: archetype,
//             archetypeDescription: archetypeDescriptions[roleIndex][archetypeIndex],
//             image: imageSrc // Assign the image source to the player's details
//         });
//     }

// console.debug('playerDetails:' + playerDetails);

// }

// On DOM Content Load
document.addEventListener('DOMContentLoaded', () => {
  const playerSlider = document.getElementById('playerSlider');
  const teamImage = document.getElementById('teamImage');
  const playerCount = document.getElementById('playerCount');
  const startButton = document.getElementById('startButton');
  const startingMessage = document.getElementById('startingMessage');
  const numberOfPlayers = document.getElementById('playerSlider').value;
  const container = document.getElementById('playerBoardsContainer');

  function updateTeamImage(value) {
    const imageSrc = `img/${value}p.jpg`;
    teamImage.src = imageSrc;
    playerCount.textContent = `Number of Players: ${value}`;
  }

  updateTeamImage(playerSlider.value);

  playerSlider.addEventListener('input', (event) => {
    updateTeamImage(numberOfPlayers);
  });

  // // Generate the multi-dimensional array
  // const characterDetails = uniqueNames.map((name, index) => {
  //   const role = roles[index % roles.length]; // Loop through roles for each name
  //   const archetypeIndex = Math.floor(index / roles.length) % archetypes[index % roles.length].length; // Loop through archetypes for each role
  //   const archetype = archetypes[index % roles.length][archetypeIndex]; // Get the corresponding archetype
  //   const roleDescription = "Role description here..."; // Replace with actual role descriptions
  //   const archetypeDescription = "Archetype description here..."; // Replace with actual archetype descriptions
  //   return [name, `./img/portraits/${name}.jpg`, role, roleDescription, archetype, archetypeDescription];
  // });

  // // Output the multi-dimensional array
  // console.log(characterDetails);

  // function getRandomName() {
  //   if (names.length === 0) return "No more names";
  //   const randomIndex = Math.floor(Math.random() * names.length);
  //   const name = names[randomIndex];
  //   names.splice(randomIndex, 1); // Remove the used name from the array
  //   return name;
  // }

  // function addPlayerImage(playerBoardIndex, playerBoardName) {
  //   const playerBoard = document.getElementsByClassName('player-board')[playerBoardIndex];
  //   const image = document.createElement('img');

  //   console.log(playerBoardIndex);

  //   image.src = `./img/portraits/${playerBoardName}.jpg`; // Assuming image names are identical to the names in the 'names' array

  //   console.log(playerBoardName);

  //   image.width = 386;
  //   image.height = 386;
  //   playerBoard.insertBefore(image, playerBoard.firstChild);
  // }

// Function to create player boards
function createPlayerBoards(numberOfPlayers) {
  //const playerDetails = []; // Your array of player details (possibly fetched or pre-loaded)

  // Logic to generate playerDetails, considering the number of players

  // Example: Generating playerDetails for a specific number of players
  for (let i = 0; i < numberOfPlayers; i++) {
    // Create a player object with random or predefined attributes
    const player = {
      name: `Player ${i + 1}`,
      color: 'blue', // Replace with actual color logic or values
      image: `./img/player_${i + 1}.jpg`, // Replace with actual image source
      role: 'Role A', // Replace with actual role logic or values
      roleDescription: 'Description of Role A',
      archetype: 'Archetype 1', // Replace with actual archetype logic or values
      archetypeDescription: 'Description of Archetype 1',
      attributes: {
        brains: Math.floor(Math.random() * 4) + 3,
        smarts: Math.floor(Math.random() * 4) + 3,
        wits: Math.floor(Math.random() * 4) + 3,
        charm: Math.floor(Math.random() * 4) + 3
      }
    };

    // Push the player object into the playerDetails array
    playerDetails.push(player);
  }

  // Example: Rendering player boards using playerDetails
  playerDetails.forEach(player => {
    // Create and render player boards with the information from the player object
    // Construct HTML/CSS to display the player details on the UI

    // Example: Use DOM manipulation or UI framework (React, Vue, etc.) to render the player boards
    console.log('Creating player board for:', player.name);
    console.log('Player color:', player.color);
    console.log('Image source:', player.image);
    console.log('Role:', player.role);
    console.log('Role description:', player.roleDescription);
    console.log('Archetype:', player.archetype);
    console.log('Archetype description:', player.archetypeDescription);
    console.log('Attributes:', player.attributes);
    console.log('---------------------------');

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");

    // HTML content for the player board
    playerBoard.innerHTML = `
        <h3>${player.name}</h3>
        <div class="attribute">
            <span>Brains:</span>
            <span class="brains-value">${player.attributes.brains}</span>
        </div>
        <div class="attribute">
            <span>Smarts:</span>
            <span class="smarts-value">${player.attributes.smarts}</span>
        </div>
        <div class="attribute">
            <span>Wits:</span>
            <span class="wits-value">${player.attributes.wits}</span>
        </div>
        <div class="attribute">
            <span>Charm:</span>
            <span class="charm-value">${player.attributes.charm}</span>
        </div>
    `;

    container.appendChild(playerBoard);
    addPlayerImage(i-1, playerName);

  });
}


  for (let i = 1; i <= numberOfPlayers; i++) {

  }

  // Use addPlayerImage function for each player board

  //for (let i = 0; i < numberOfPlayers; i++) {
  //  addPlayerImage(i);
  //}


  const playerBoards = document.querySelectorAll('.player-board');
  // const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Black'];
  let colorIndex = 0;

  playerBoards.forEach((board, index) => {
    const colorSquare = document.createElement('div');
    colorSquare.classList.add('color-square');
    colorSquare.style.backgroundColor = playerColors[colorIndex];

    // Reset the color index when reaching the end of the colors array
    if (colorIndex === colors.length - 1) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }

    board.appendChild(colorSquare);
  });



  // Event listener for the player slider
  //document.getElementById('playerSlider').addEventListener('input', createPlayerBoards);

  document.getElementById('startButton').addEventListener('click', () => {

    createPlayerBoards(numberOfPlayers);

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
