

  // Function to generate a random name for players
  const names = [
    "Adela", "Aidan", "Alessia", "Ami", "Amira",
    "Anton", "Anya", "Audrey", "Celine", "Charlie",
    "David", "Elena", "Emre", "Eren", "Eve",
    "Frank", "Grace", "Hanna", "Henry", "Idris",
    "Isaac", "Ivan",  "Julia", "Kevin", "Leyla",
    "Liam", "Lina", "Luca", "Lucio", "Luna",
    "Mateo", "Maya", "Milan", "Mohammad", "Nadia",
    "Nana", "Nathan", "Nikki", "Noah", "Oliver",
    "Olivia", "Oscar", "Paul", "Quinn", "Rachel",
    "Sakura", "Sam", "Sebastian", "Selena", "Sofia",
    "Sora", "Theo", "Tina", "Ursula", "Victor",
    "Wendy", "Xander", "Yasmine", "Yolanda", "Yvonne",
    "Zara", "Zed", "Zev", "Zuzu"
  ];

  const roles = [
    "Mastermind",
    "Infiltrator",
    "Demolition Expert",
    "Negotiator",
    "Hacker",
    "Wheelman",
    "Brute",
    "Medic"
  ];

  const roleDescriptions = [
    "The Mastermind is a strategic leader and the brain behind the heist operation.",
    "The Infiltrator is a stealthy operative skilled in covert activities and stealth tactics.",
    "The Demolition Expert specializes in explosives, destruction, and sabotage.",
    "The Negotiator is a charismatic communicator and resolver of conflicts.",
    "The Hacker is a tech-savvy expert in breaching digital security and systems.",
    "The Wheelman is a skilled driver and expert in vehicle-related operations.",
    "The Brute is a powerhouse, using physical strength and intimidation to get the job done.",
    "The Medic is the team's healer, tending to injuries and providing medical expertise."
  ];

  const archetypes = [
    ["Criminal Mastermind", "Tactical Genius", "Scheming Manipulator", "Cunning Plotter", "Calculating Planner", "Devious Tactician", "Resourceful Thinker", "Chess Grandmaster"],
    ["Ninja", "Silent Assassin", "Espionage Agent", "Master of Disguise", "Shadowy Operative", "Lockpick Specialist", "Ghostly Phantom", "Camouflage Expert"],
    ["Bomb Technician", "Explosives Specialist", "Wrecking Ball", "Pyromaniac", "Structural Engineer", "Sabotage Artist", "Firestarter", "Blastmaster"],
    ["Smooth Talker", "Crisis Manager", "Diplomat", "Negotiation Specialist", "Conflict Resolver", "Charismatic Speaker", "Ransom Negotiator", "Crisis Mediator"],
    ["Cyber-Genius", "Codebreaker", "Hacker Extraordinaire", "IT Whiz", "Network Infiltrator", "Digital Saboteur", "Tech Wizard", "Crypto Analyst"],
    ["Race Car Driver", "Stunt Driver", "Escape Artist", "Reckless Daredevil", "Precision Driver", "Vehicle Specialist", "Skilled Pilot", "Speed Demon"],
    ["Muscleman", "Bouncer", "Intimidating Thug", "Enforcer", "Bodyguard", "Strongman", "Musclebound Titan", "Heavyweight Champion"],
    ["Field Medic", "Combat Nurse", "Emergency Doctor", "Healing Specialist", "Paramedic", "Triage Expert", "Medicinal Chemist", "Lifesaver"]
  ];

  const archetypeDescriptions = [
    [
      "The Criminal Mastermind excels in strategic planning and cunning schemes, orchestrating complex operations with precision.",
      "A Tactical Genius with a sharp mind for devising elaborate heists and outsmarting authorities at every turn.",
      "A Scheming Manipulator who manipulates situations to their advantage, using subtle tactics and persuasive strategies.",
      "The Cunning Plotter always stays several steps ahead, carefully calculating each move in the grand plan.",
      "A Calculating Planner with an exceptional ability to prepare and strategize even the most intricate criminal activities.",
      "The Devious Tactician employs resourcefulness and shrewdness to navigate through any unexpected challenge.",
      "A Resourceful Thinker who handles unexpected twists with ingenuity, adapting plans swiftly for success.",
      "A Chess Grandmaster, playing the game of crime with strategic brilliance and forethought, ensuring victory in every move."
    ],
    [
      "The Ninja is an expert in stealth and precision, employing silent movements and lethal tactics.",
      "A Silent Assassin who specializes in discrete and efficient elimination of targets.",
      "The Espionage Agent operates in shadows, gathering intel and executing missions undetected.",
      "A Master of Disguise capable of blending into any environment or persona for the perfect infiltration.",
      "A Shadowy Operative who moves with unseen grace, leaving no trace behind.",
      "The Lockpick Specialist adept at bypassing security and gaining access to restricted areas.",
      "A Ghostly Phantom haunting the criminal underworld with stealthy maneuvers and invisible presence.",
      "A Camouflage Expert skilled in concealment and blending into various environments with ease."
  ],
  [
      "The Bomb Technician is an expert in handling and diffusing explosive devices with precision and expertise.",
      "An Explosives Specialist mastering the intricacies of bomb crafting and detonation techniques.",
      "A Wrecking Ball capable of causing controlled destruction with a profound knowledge of explosive dynamics.",
      "A Pyromaniac drawn to the fascination of fire and its controlled utilization in dangerous situations.",
      "The Structural Engineer adept at understanding the dynamics of buildings and structural weaknesses.",
      "A Sabotage Artist who strategically employs explosives to dismantle targets or structures.",
      "A Firestarter igniting controlled chaos and diversion using explosive devices.",
      "A Blastmaster who commands the art of controlled explosions, using them for maximum effect."
  ],
  [
      "The Smooth Talker is a master of persuasion, navigating through difficult conversations with tact and charm.",
      "A Crisis Manager specializing in defusing tense situations and resolving conflicts calmly.",
      "The Diplomat maintains a composed and diplomatic approach in resolving disputes and negotiating deals.",
      "A Negotiation Specialist skilled in reaching mutually beneficial agreements through strategic discussions.",
      "The Conflict Resolver uses rationality and charisma to bring about peaceful resolutions.",
      "A Charismatic Speaker adept at swaying opinions and bringing parties to consensus.",
      "A Ransom Negotiator experienced in high-pressure situations, securing the best outcomes.",
      "A Crisis Mediator providing solutions and harmony amidst high-stress and adversarial environments."
  ],
  [
      "The Cyber-Genius is a maestro in digital landscapes, mastering code and encryption with ease.",
      "A Codebreaker skilled in deciphering complex algorithms and breaking through security systems.",
      "A Hacker Extraordinaire specializing in infiltrating and manipulating digital networks.",
      "An IT Whiz capable of handling intricate technological systems and network infrastructures.",
      "The Network Infiltrator navigates through complex systems and servers with unparalleled stealth.",
      "A Digital Saboteur wreaking havoc in cyberspace by disrupting and corrupting digital assets.",
      "A Tech Wizard well-versed in the intricacies of technology, able to create and navigate complex systems.",
      "A Crypto Analyst, decoding and analyzing intricate encryption systems with analytical precision."
  ],
  [
      "The Race Car Driver is an expert in high-speed pursuits and maneuvering vehicles with precision.",
      "A Stunt Driver capable of performing daring and calculated driving maneuvers in high-stakes situations.",
      "An Escape Artist specializing in evasive driving techniques to avoid pursuit and capture.",
      "A Reckless Daredevil always pushing the limits, willing to take extreme risks for the perfect escape.",
      "The Precision Driver executes precise driving actions, evading obstacles and pursuit with finesse.",
      "A Vehicle Specialist with comprehensive knowledge and mastery of various types of vehicles.",
      "A Skilled Pilot capable of managing and maneuvering a wide range of aerial vehicles.",
      "A Speed Demon handling vehicles at breakneck speeds, making swift getaways or pursuits."
  ],
  [
      "The Muscleman is a physically imposing figure, known for strength and intimidation.",
      "A Bouncer adept at enforcing order and controlling access in various environments.",
      "An Intimidating Thug capable of instilling fear and compliance in others.",
      "The Enforcer acts as a strong presence, ensuring compliance through assertive means.",
      "A Bodyguard providing protection and security through physical strength and resilience.",
      "A Strongman capable of handling physical confrontations and overpowering adversaries.",
      "A Musclebound Titan showcasing extraordinary physical strength and brawn.",
      "A Heavyweight Champion formidable in physical altercations, dominating adversaries."
  ],
  [
      "The Field Medic is a frontline emergency responder, providing essential care in high-stress situations.",
      "A Combat Nurse trained to handle emergency medical care in combat scenarios.",
      "An Emergency Doctor specializing in quick and effective medical treatment in urgent situations.",
      "A Healing Specialist utilizing extensive medical knowledge to mend wounds and injuries.",
      "A Paramedic experienced in immediate emergency medical treatment and transport.",
      "A Triage Expert adept at prioritizing and treating patients based on urgency.",
      "A Medicinal Chemist crafting and administering effective medical treatments.",
      "A Lifesaver providing crucial medical aid and ensuring survival in critical conditions."
  ]
];

// const playerColors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Black'];
const playerColors = ['#B81414', '#B86314', '#B8A814', '#14B82E', '#144BB8', '#2F14B8', '#8114B8'];

export {
  names,

  roles,
  roleDescriptions,
  archetypes,
  archetypeDescriptions,
  playerColors
};