// QUIZ ME — Question Data
// Each combination has 9 questions. The game requires 10.
// Add a 10th question to each combination when ready.

export const questionSets = [
  {
    id: 1,
    name: "THE CODEBREAKER",
    description: "Crack the code. Connect the clues. Break through.",
    icon: "🔓",
    color: "#00f0ff",
    questions: [
      {
        id: 1,
        category: "GENERAL KNOWLEDGE",
        title: "The Invisible Shield",
        type: "multiple-choice",
        question:
          "I have no walls, yet I protect a planet. I cannot be seen, but without me, a compass would lose its way. I stretch around a world and help shield it from dangerous visitors from space. What am I?",
        options: ["Ozone layer", "Magnetic field", "Atmosphere", "Gravity"],
        answer: "Magnetic field",
        hint: "Think about what makes a compass point north.",
        explanation:
          "The Earth's magnetic field protects the planet from solar wind and guides a compass needle.",
      },
      {
        id: 2,
        category: "GENERAL KNOWLEDGE",
        title: "The Ancient Messenger",
        type: "multiple-choice",
        question:
          "I was born before the internet, before telephones became common, and even before modern computers. I could carry a message across oceans, but I never needed electricity. My message travelled through pulses and was understood by dots and dashes. What am I?",
        options: ["Telegraph", "Radio", "Fax machine", "Telegraphy"],
        answer: "Telegraph",
        hint: "Dots and dashes are the language of Morse code.",
        explanation:
          "The telegraph used electrical pulses (Morse code — dots and dashes) to send messages over long distances.",
      },
      {
        id: 3,
        category: "MYSTERY",
        title: "The Three Switches",
        type: "multiple-choice",
        question:
          "You stand outside a locked room. Inside is one light bulb. Outside are three switches. Only one switch controls the bulb. You may operate the switches however you want, but you may enter the room only once. How do you discover the correct switch?",
        options: [
          "Turn all three on",
          "Turn one on and enter immediately",
          "Turn one on for a while, turn it off, turn another on, then enter",
          "Impossible",
        ],
        answer:
          "Turn one on for a while, turn it off, turn another on, then enter",
        hint: "A light bulb produces more than just light...",
        explanation:
          "Turn switch 1 on for a while (bulb heats up), turn it off, turn switch 2 on, then enter. If the bulb is on → switch 2. If off but warm → switch 1. If off and cold → switch 3.",
      },
      {
        id: 4,
        category: "MYSTERY",
        title: "The Detective's Clock",
        type: "multiple-choice",
        question:
          'A detective arrives at a house at exactly 8:00 PM.\nFather: "I was sleeping."\nMother: "I was cooking dinner."\nSon: "I was playing video games."\nMaid: "I was getting the morning newspaper."\nWho is lying?',
        options: ["Father", "Mother", "Son", "Maid"],
        answer: "Maid",
        hint: "Pay attention to the time the detective arrived.",
        explanation:
          "The detective arrived at 8:00 PM. The maid said she was getting the morning newspaper — newspapers are delivered in the morning, not at 8 PM.",
      },
      {
        id: 5,
        category: "THINK BEFORE YOU SAY",
        title: "The Photograph",
        type: "multiple-choice",
        question:
          'A man looks at a photograph. Someone asks, "Who is that person?" He replies: "I have no brothers or sisters, but that man\'s father is my father\'s son." Who is in the photograph?',
        options: ["His father", "His son", "Himself", "His uncle"],
        answer: "His son",
        hint: '"My father\'s son" — if he has no brothers or sisters, who is that?',
        explanation:
          '"My father\'s son" is himself (since he has no siblings). So "that man\'s father is me" — the person in the photograph is his son.',
      },
      {
        id: 6,
        category: "THINK BEFORE YOU SAY",
        title: "The Elevator",
        type: "multiple-choice",
        question:
          "A man lives on the 20th floor. Every morning he takes the elevator to the ground floor. When he returns, he takes the elevator only to the 10th floor and walks the remaining 10 floors. But on rainy days, he goes directly to the 20th floor. Why?",
        options: [
          "Elevator broken above 10",
          "He exercises only on sunny days",
          "He is too short to reach the 20th-floor button",
          "He dislikes the 20th floor",
        ],
        answer: "He is too short to reach the 20th-floor button",
        hint: "What does he carry on rainy days that he doesn't have on other days?",
        explanation:
          "He is too short to reach the 20th-floor button. On rainy days he uses his umbrella to press the button.",
      },
      {
        id: 7,
        category: "NUMERICAL PUZZLE",
        title: "The Growing Pattern",
        type: "multiple-choice",
        question: "2, 6, 12, 20, 30, ?\nWhat number is hiding next?",
        options: ["36", "40", "42", "44"],
        answer: "42",
        hint: "Look at the differences between consecutive numbers.",
        explanation:
          "The differences are 4, 6, 8, 10 — each increasing by 2. The next difference is 12, so 30 + 12 = 42.",
      },
      {
        id: 8,
        category: "SIMPLE GAMES",
        title: "Memory Lock",
        type: "memory",
        question: "Which symbol appeared immediately before ★?",
        memorySequence: ["▲", "●", "■", "◆", "▲", "★", "●"],
        memoryDuration: 2000,
        options: ["▲", "◆", "●", "■"],
        answer: "▲",
        hint: "Focus on the symbol right before the star.",
        explanation:
          "The sequence was ▲ ● ■ ◆ ▲ ★ ●. The symbol immediately before ★ is ▲.",
      },
      {
        id: 9,
        category: "SIMPLE GAMES",
        title: "The Intruder",
        type: "multiple-choice",
        question:
          "16 — 25 — 36 — 49 — 63 — 64\nFive numbers belong to the same family. One is an intruder. Find it.",
        options: ["25", "36", "49", "63"],
        answer: "63",
        hint: "What is special about perfect squares?",
        explanation:
          "16, 25, 36, 49, 64 are all perfect squares (4², 5², 6², 7², 8²). 63 is NOT a perfect square — it is the intruder.",
      },
      // TODO: Add 10th question here
    ],
  },
  {
    id: 2,
    name: "THE HIDDEN CLUE",
    description: "Every answer hides a clue. Pay attention.",
    icon: "🔍",
    color: "#a855f7",
    questions: [
      {
        id: 1,
        category: "GENERAL KNOWLEDGE",
        title: "The Planet That Spins Differently",
        type: "multiple-choice",
        question:
          "I am a planet, but I refuse to spin like most of my neighbours. The Sun rises in the west on my surface. I am almost Earth's twin in size, yet I am one of the hottest worlds. Who am I?",
        options: ["Mars", "Venus", "Mercury", "Neptune"],
        answer: "Venus",
        hint: "Think about retrograde rotation — which planet rotates backwards?",
        explanation:
          "Venus rotates in the opposite direction to most planets (retrograde rotation), so the Sun rises in the west. Despite being farther from the Sun than Mercury, its thick atmosphere makes it hotter.",
      },
      {
        id: 2,
        category: "GENERAL KNOWLEDGE",
        title: "The Number That Changed Computing",
        type: "multiple-choice",
        question:
          "I am neither 0 nor 1, yet I helped computers understand information. I have eight bits. I can represent letters, numbers and symbols. What am I?",
        options: ["Byte", "Pixel", "Kilobyte", "Nibble"],
        answer: "Byte",
        hint: "8 bits = ?",
        explanation:
          "A byte is 8 bits and is the fundamental unit of data in computing. It can represent 256 different values (0–255).",
      },
      {
        id: 3,
        category: "MYSTERY",
        title: "The Locked Room",
        type: "multiple-choice",
        question:
          "A man is found dead inside a locked room. There are no windows. The door is locked from inside. Beside him lies a puddle of water and broken glass. No weapon is found. What happened?",
        options: [
          "He was poisoned",
          "Someone escaped through the window",
          "His fishbowl broke and the fish died",
          "He drowned",
        ],
        answer: "His fishbowl broke and the fish died",
        hint: "The dead 'man' might not be human. Think about the water and broken glass.",
        explanation:
          "The 'man' is a fish. His fishbowl (glass) broke, the water spilled out, and the fish died.",
      },
      {
        id: 4,
        category: "MYSTERY",
        title: "The Missing Dollar",
        type: "multiple-choice",
        question:
          "Three friends pay ₹300 for a room. Later, the hotel discovers the room should have cost ₹250. The manager gives ₹50 to the bellboy to return. The bellboy secretly keeps ₹20 and gives ₹10 back to each friend. So each friend paid ₹90. ₹90 × 3 = ₹270. Add the ₹20 kept by the bellboy = ₹290. Where did the missing ₹10 go?",
        options: [
          "Manager stole it",
          "Bellboy stole it",
          "There is no missing ₹10; the calculation is wrong",
          "One friend paid less",
        ],
        answer: "There is no missing ₹10; the calculation is wrong",
        hint: "You shouldn't add the bellboy's ₹20 to the ₹270 — it's already included.",
        explanation:
          "The calculation is a trick. ₹270 already includes the ₹20 the bellboy kept (₹250 to hotel + ₹20 to bellboy = ₹270). Adding the ₹20 again double-counts it.",
      },
      {
        id: 5,
        category: "THINK BEFORE YOU SAY",
        title: "The Months",
        type: "multiple-choice",
        question:
          "Some months have 30 days. Some have 31. One has 28. How many months have at least 28 days?",
        options: ["1", "2", "6", "12"],
        answer: "12",
        hint: "Read the question very carefully. 'At least' is the key phrase.",
        explanation:
          "ALL 12 months have at least 28 days. The trick is that 30 and 31 are also 'at least 28'.",
      },
      {
        id: 6,
        category: "THINK BEFORE YOU SAY",
        title: "The Dark Room",
        type: "multiple-choice",
        question:
          "You enter a completely dark room. Inside there is a candle, a lamp, and a fireplace. You have only one match. What do you light first?",
        options: ["Candle", "Lamp", "Fireplace", "The match"],
        answer: "The match",
        hint: "Before you can light anything, what must you do first?",
        explanation:
          "You must light the match first before you can light anything else.",
      },
      {
        id: 7,
        category: "NUMERICAL PUZZLE",
        title: "The Missing Number",
        type: "multiple-choice",
        question: "3, 8, 15, 24, 35, ?\nWhat comes next?",
        options: ["46", "48", "49", "50"],
        answer: "48",
        hint: "Look at the differences between consecutive numbers.",
        explanation:
          "Differences are 5, 7, 9, 11 — each increasing by 2. The next difference is 13, so 35 + 13 = 48.",
      },
      {
        id: 8,
        category: "SIMPLE GAMES",
        title: "Quick Eyes",
        type: "spot-difference",
        question:
          "Find the different character! You have 5 seconds.",
        displaySequence: ["Q", "Q", "Q", "O", "Q", "Q", "Q", "Q", "Q"],
        spotTarget: "O",
        options: ["Q", "O", "D", "P"],
        answer: "O",
        hint: "Look carefully — one character is round, not angular.",
        explanation:
          "Among all the Q's, the letter O stands out as the different character.",
      },
      {
        id: 9,
        category: "SIMPLE GAMES",
        title: "Sequence Memory",
        type: "memory",
        question: "Which number was third from the left?",
        memorySequence: ["8", "3", "7", "1", "9", "4"],
        memoryDuration: 2000,
        options: ["3", "7", "1", "9"],
        answer: "7",
        hint: "Try to remember the order: 8, 3, 7, 1, 9, 4.",
        explanation:
          "The sequence was 8 → 3 → 7 → 1 → 9 → 4. The third number from the left is 7.",
      },
      // TODO: Add 10th question here
    ],
  },
  {
    id: 3,
    name: "THE LOGIC TRAP",
    description: "Logic is your weapon. Don't fall into the trap.",
    icon: "🧪",
    color: "#f43f5e",
    questions: [
      {
        id: 1,
        category: "GENERAL KNOWLEDGE",
        title: "The Silent Giant",
        type: "multiple-choice",
        question:
          "I am the largest planet, yet I have no solid ground for you to stand on. I have a storm larger than Earth that has been raging for centuries. Who am I?",
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
        answer: "Jupiter",
        hint: "This planet's famous storm is called the Great Red Spot.",
        explanation:
          "Jupiter is the largest planet in our solar system. Its Great Red Spot is a storm larger than Earth that has lasted for hundreds of years.",
      },
      {
        id: 2,
        category: "GENERAL KNOWLEDGE",
        title: "The Man Behind the Machine",
        type: "multiple-choice",
        question:
          "I never built a modern computer, yet a programming language was named after me. I was a mathematician, a writer, and the daughter of a famous poet. Who am I?",
        options: [
          "Marie Curie",
          "Ada Lovelace",
          "Grace Hopper",
          "Rosalind Franklin",
        ],
        answer: "Ada Lovelace",
        hint: "The programming language 'Ada' was named after this person.",
        explanation:
          "Ada Lovelace, daughter of poet Lord Byron, is considered the first computer programmer. The Ada programming language was named in her honour.",
      },
      {
        id: 3,
        category: "MYSTERY",
        title: "The Two Doors",
        type: "multiple-choice",
        question:
          "Two doors stand before you. One leads to safety, one to danger. Two guards stand beside them. One always lies; one always tells the truth. You may ask one question to one guard. What should you ask?",
        options: [
          "Which door is safe?",
          "Are you telling the truth?",
          "Which door would the other guard say is safe?",
          "Which guard is lying?",
        ],
        answer: "Which door would the other guard say is safe?",
        hint: "If you ask about what the OTHER guard would say, you always get the wrong door — so choose the opposite.",
        explanation:
          "Ask either guard: 'Which door would the other guard say is safe?' Both will point to the dangerous door (because one lies about what the truthful one says, and the truthful one honestly reports the liar's wrong answer). Choose the opposite door.",
      },
      {
        id: 4,
        category: "MYSTERY",
        title: "The Three Suspects",
        type: "multiple-choice",
        question:
          'A computer disappears. Three students are questioned.\nA: "B stole it."\nB: "C stole it."\nC: "B is lying."\nExactly one person is telling the truth. Who stole the computer?',
        options: ["A", "B", "C", "Impossible"],
        answer: "A",
        hint: "If exactly one statement is true, think about what happens if B's statement is true vs. false.",
        explanation:
          "If B is telling the truth (C stole it), then C's statement ('B is lying') is false, meaning B is truthful — consistent. But A's statement ('B stole it') is false. That gives us one truth-teller (B). But C says 'B is lying' — if B is truthful, C lies. And A also lies. That's one truth-teller. But let's check: if A is the thief, A says 'B stole it' (lie), B says 'C stole it' (lie), C says 'B is lying' (truth, since B IS lying). One truth-teller. A is the thief.",
      },
      {
        id: 5,
        category: "THINK BEFORE YOU SAY",
        title: "The Doctor",
        type: "multiple-choice",
        question:
          'A father and son are in a car accident. The father dies. The son is rushed to hospital. The surgeon sees him and says, "I cannot operate. He is my son." How?',
        options: [
          "The surgeon is his mother",
          "Uncle",
          "Brother",
          "Impossible",
        ],
        answer: "The surgeon is his mother",
        hint: "Don't assume the surgeon's gender.",
        explanation: "The surgeon is the boy's mother.",
      },
      {
        id: 6,
        category: "THINK BEFORE YOU SAY",
        title: "The Boat",
        type: "multiple-choice",
        question:
          "You see a boat completely filled with people. Yet there isn't a single single person on board. How?",
        options: [
          "Everyone is married",
          "Invisible",
          "All children",
          "All asleep",
        ],
        answer: "Everyone is married",
        hint: 'Focus on the word "single" — it has two meanings.',
        explanation:
          'The word "single" means unmarried. Everyone on the boat is married, so there is not a single (unmarried) person on board.',
      },
      {
        id: 7,
        category: "NUMERICAL PUZZLE",
        title: "The Secret Equation",
        type: "multiple-choice",
        question:
          "If 2 + 3 = 10, 3 + 4 = 21, 4 + 5 = 36, then 5 + 6 = ?",
        options: ["45", "50", "55", "60"],
        answer: "55",
        hint: "Try multiplying the numbers instead of adding them, and see if there's a pattern.",
        explanation:
          "The pattern is (a + b) × a. So 2+3: (2+3)×2 = 10. 3+4: (3+4)×3 = 21. 4+5: (4+5)×4 = 36. 5+6: (5+6)×5 = 55.",
      },
      {
        id: 8,
        category: "SIMPLE GAMES",
        title: "Follow the Rule",
        type: "multiple-choice",
        question: "2 → 4 → 8 → 16 → 32 → ?\nWhat comes next?",
        options: ["48", "54", "64", "72"],
        answer: "64",
        hint: "Each number is doubled.",
        explanation:
          "Each number is multiplied by 2. 32 × 2 = 64.",
      },
      {
        id: 9,
        category: "SIMPLE GAMES",
        title: "Find the Different One",
        type: "spot-difference",
        question:
          "Find the different shape! Tap the one that doesn't belong.",
        displaySequence: ["■", "■", "■", "■", "■", "●", "■", "■", "■"],
        spotTarget: "●",
        options: ["■", "●", "▲", "◆"],
        answer: "●",
        hint: "One shape is round, the rest are square.",
        explanation:
          "Among all the squares (■), the circle (●) is the different shape.",
      },
      // TODO: Add 10th question here
    ],
  },
  {
    id: 4,
    name: "THE MIND GAME",
    description: "Your mind is the battlefield. Trust your instincts.",
    icon: "🧠",
    color: "#f59e0b",
    questions: [
      {
        id: 1,
        category: "GENERAL KNOWLEDGE",
        title: "The Ocean Mystery",
        type: "multiple-choice",
        question:
          "I cover more than half of Earth's surface. I am salty, I have trenches deeper than mountains are tall, and I contain a mountain range longer than any on land. What am I?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        answer: "Pacific",
        hint: "This is the largest and deepest ocean on Earth.",
        explanation:
          "The Pacific Ocean covers more than half of Earth's water surface, contains the Mariana Trench (deepest point), and the Mid-Ocean Ridge system.",
      },
      {
        id: 2,
        category: "GENERAL KNOWLEDGE",
        title: "The Language Without Words",
        type: "multiple-choice",
        question:
          "I speak without sound. I have only two symbols: 0 and 1. Yet with these two symbols, computers can create music, movies, games and entire worlds. What am I?",
        options: ["Morse code", "Binary", "ASCII", "Encryption"],
        answer: "Binary",
        hint: "Computers think in 0s and 1s.",
        explanation:
          "Binary (base-2) uses only 0 and 1. All digital data — text, images, video, audio — is represented in binary at the machine level.",
      },
      {
        id: 3,
        category: "MYSTERY",
        title: "The Four Cards",
        type: "multiple-choice",
        question:
          'You see four cards: A  D  4  7. Each card has a letter on one side and a number on the other. Rule: "If a card has a vowel on one side, it must have an even number on the other." Which cards must you turn over to test this rule?',
        options: ["A and 4", "A and 7", "D and 4", "A, D and 7"],
        answer: "A and 7",
        hint: "You need to check if the rule can be broken. Which cards could potentially break it?",
        explanation:
          "Turn A to check if it has an even number (testing the rule directly). Turn 7 because if it has a vowel on the other side, the rule is broken. D doesn't matter (rule doesn't apply to consonants). 4 doesn't matter (an even number with a vowel doesn't break the rule, and neither does a consonant).",
      },
      {
        id: 4,
        category: "MYSTERY",
        title: "The Poisoned Cup",
        type: "multiple-choice",
        question:
          "Four cups look identical. Exactly one contains poison. The poison has no smell, colour or taste. You have one test animal. The poison takes exactly one hour to show its effect. How can you identify the poisoned cup within one hour?",
        options: [
          "Give half a cup",
          "Give samples from all four at different times",
          "Impossible",
          "Mix all four",
        ],
        answer: "Give samples from all four at different times",
        hint: "Stagger the timing of each sample.",
        explanation:
          "Give the test animal a sample from each cup at different time intervals (e.g., 0, 15, 30, 45 min). The timing of the reaction reveals which cup was poisoned.",
      },
      {
        id: 5,
        category: "THINK BEFORE YOU SAY",
        title: "The Word Puzzle",
        type: "multiple-choice",
        question:
          "I become shorter when you add two letters to me. What am I?",
        options: ["Short", "Small", "Long", "Tall"],
        answer: "Short",
        hint: "Think literally — what word gets 'shorter' with more letters?",
        explanation:
          'The word "short" becomes "shorter" when you add the letters "er" to it.',
      },
      {
        id: 6,
        category: "THINK BEFORE YOU SAY",
        title: "The Room",
        type: "multiple-choice",
        question:
          "There are 10 candles burning in a room. Two are blown out. The others continue burning. Later, how many candles are left?",
        options: ["2", "8", "10", "0"],
        answer: "2",
        hint: "What happens to candles that keep burning vs. those that don't?",
        explanation:
          "The 8 candles that continued burning will eventually melt completely and disappear. The 2 blown-out candles remain as candles. So 2 candles are left.",
      },
      {
        id: 7,
        category: "NUMERICAL PUZZLE",
        title: "The Pattern",
        type: "multiple-choice",
        question: "1, 4, 10, 22, 46, ?\nWhat comes next?",
        options: ["82", "90", "94", "96"],
        answer: "94",
        hint: "Look at how each number relates to the previous one.",
        explanation:
          "Each number is (previous × 2) + 2. So: 1×2+2=4, 4×2+2=10, 10×2+2=22, 22×2+2=46, 46×2+2=94.",
      },
      {
        id: 8,
        category: "SIMPLE GAMES",
        title: "Speed Tap",
        type: "speed-tap",
        question:
          "Tap ONLY the red circles. You have 5 seconds. Don't tap the blue ones!",
        circles: [
          { color: "red" },
          { color: "blue" },
          { color: "red" },
          { color: "blue" },
          { color: "red" },
          { color: "blue" },
          { color: "red" },
          { color: "blue" },
          { color: "blue" },
        ],
        options: ["All red circles tapped", "Submitted"],
        answer: "All red circles tapped",
        hint: "Stay calm. Tap only the red ones.",
        explanation:
          "You needed to tap all red circles without accidentally tapping any blue ones.",
      },
      {
        id: 9,
        category: "SIMPLE GAMES",
        title: "Reverse Memory",
        type: "memory",
        question: "Enter the sequence backwards!",
        memorySequence: ["4", "8", "2", "9", "5"],
        memoryDuration: 2000,
        reverseMode: true,
        options: ["5, 9, 2, 8, 4", "4, 8, 2, 9, 5", "5, 2, 9, 8, 4", "9, 5, 4, 8, 2"],
        answer: "5, 9, 2, 8, 4",
        hint: "The original sequence was 4 → 8 → 2 → 9 → 5. Now reverse it.",
        explanation:
          "The sequence was 4 → 8 → 2 → 9 → 5. Reversed: 5 → 9 → 2 → 8 → 4.",
      },
      // TODO: Add 10th question here
    ],
  },
  {
    id: 5,
    name: "FINAL LEVEL",
    description: "The ultimate test. Only the sharpest minds survive.",
    icon: "💀",
    color: "#ef4444",
    questions: [
      {
        id: 1,
        category: "GENERAL KNOWLEDGE",
        title: "The Numberless Number",
        type: "multiple-choice",
        question:
          "I am a number, but I was once considered so strange that some mathematicians didn't even accept me. I can represent nothing, yet without me, modern mathematics and computers would be very different. Who am I?",
        options: ["One", "Zero", "Infinity", "Negative one"],
        answer: "Zero",
        hint: "This number represents 'nothing' but is essential to our number system.",
        explanation:
          "Zero was controversial for centuries. Many ancient mathematicians didn't accept it. Yet it's essential for modern maths, place-value notation, and computing.",
      },
      {
        id: 2,
        category: "GENERAL KNOWLEDGE",
        title: "The City That Isn't There",
        type: "multiple-choice",
        question:
          "I am a country, but I have no coastline. I am completely surrounded by another country. My capital is one of the highest capitals in the world. Who am I?",
        options: ["Nepal", "Bhutan", "Lesotho", "Switzerland"],
        answer: "Lesotho",
        hint: "This country is entirely enclosed within South Africa.",
        explanation:
          "Lesotho is completely surrounded by South Africa. Its capital, Maseru, sits at about 1,600 metres above sea level.",
      },
      {
        id: 3,
        category: "MYSTERY",
        title: "The Hacker's Password",
        type: "multiple-choice",
        question:
          "682 — One digit is correct and in the correct place.\n614 — One digit is correct but in the wrong place.\n206 — Two digits are correct but both are in the wrong places.\n738 — Nothing is correct.\n780 — One digit is correct but in the wrong place.\nWhat is the three-digit password?",
        options: ["042", "024", "062", "204"],
        answer: "042",
        hint: "Start by eliminating digits that appear in clue 4 (738 — nothing correct). Then work through the other clues.",
        explanation:
          "From 738: 7, 3, 8 are all wrong. From 682: 6 or 2 is correct in place (not 8). From 614: 6, 1, or 4 — one correct, wrong place. From 206: two correct, wrong place. From 780: 0 is correct, wrong place. Working through logically: the password is 042.",
      },
      {
        id: 4,
        category: "MYSTERY",
        title: "The Four Prisoners",
        type: "multiple-choice",
        question:
          'Four prisoners stand in a line. Each wears either a black or white hat. They can see the hats in front of them but not their own. They are told: "At least one person is wearing a black hat." After a long silence, one prisoner correctly identifies his own hat colour. What allowed him to know?',
        options: [
          "Reflection",
          "He used the silence of the others as information",
          "Someone told him",
          "He guessed",
        ],
        answer: "He used the silence of the others as information",
        hint: "If someone could see the answer, they would have spoken immediately.",
        explanation:
          "The silence itself is information. If a prisoner at the back could see all white hats in front, he'd know his is black. When he doesn't speak, the next prisoner gains information, and so on.",
      },
      {
        id: 5,
        category: "THINK BEFORE YOU SAY",
        title: "The Family",
        type: "multiple-choice",
        question:
          "Two fathers and two sons go fishing. They catch three fish. Each person gets exactly one fish. Nobody shares. How is this possible?",
        options: [
          "One fish was very large",
          "There were only three people",
          "One person didn't eat",
          "They caught another fish later",
        ],
        answer: "There were only three people",
        hint: "Can one person be both a father AND a son?",
        explanation:
          "There are only three people: grandfather, father, and son. The father is both a 'father' (to the son) and a 'son' (of the grandfather).",
      },
      {
        id: 6,
        category: "THINK BEFORE YOU SAY",
        title: "The Word Trap",
        type: "multiple-choice",
        question:
          "What word becomes wrong when you spell it correctly?",
        options: ["Wrong", "Correct", "Mistake", "False"],
        answer: "Wrong",
        hint: "Think literally about the word itself.",
        explanation:
          'When you spell the word "wrong" correctly, you get the word "wrong" — which literally IS the word "wrong".',
      },
      {
        id: 7,
        category: "NUMERICAL PUZZLE",
        title: "The Final Sequence",
        type: "multiple-choice",
        question: "2, 3, 5, 9, 17, 33, ?\nWhat comes next?",
        options: ["49", "57", "65", "67"],
        answer: "65",
        hint: "Look at the differences between consecutive numbers.",
        explanation:
          "Differences: 1, 2, 4, 8, 16 — each doubling. Next difference is 32, so 33 + 32 = 65.",
      },
      {
        id: 8,
        category: "SIMPLE GAMES",
        title: "The Vanishing Code",
        type: "memory",
        question: "What was the second number?",
        memorySequence: ["7", "4", "9", "2", "6", "1", "8"],
        memoryDuration: 2000,
        options: ["4", "9", "2", "6"],
        answer: "4",
        hint: "The sequence starts with 7, then...",
        explanation:
          "The sequence was 7, 4, 9, 2, 6, 1, 8. The second number is 4.",
      },
      {
        id: 9,
        category: "SIMPLE GAMES",
        title: "The Pattern Breaker",
        type: "spot-difference",
        question:
          "Two symbols are different from the rest. Find BOTH before time runs out!",
        displaySequence: ["◆", "◆", "★", "◆", "◆", "◆", "★", "◆", "◆"],
        spotTarget: "★",
        spotCount: 2,
        options: ["◆", "★", "●", "■"],
        answer: "★",
        hint: "Look for the shape that's not a diamond.",
        explanation:
          "Among the diamonds (◆), two stars (★) are the different symbols.",
      },
      // TODO: Add 10th question here
    ],
  },
];
