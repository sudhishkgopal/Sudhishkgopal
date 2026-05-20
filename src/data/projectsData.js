export const projects = [
  {
    id: "blindspot",
    title: "BlindSpot",
    shortDescription:
      "AI-powered web vulnerability scanner that orchestrates professional penetration testing tools through MCP pipelines — built for ClaudeHacks 2026.",
    longDescription: `Security audits are out of reach for most small businesses and startups — they require manual command-line expertise, expensive consultants, and hours of tool-chaining. BlindSpot automates the entire workflow by placing Claude at the center of a Model Context Protocol (MCP) orchestration layer that decides which tools to run, sequences them intelligently, and synthesizes findings into plain-English severity reports.

The scanning pipeline runs in two phases. Passive reconnaissance uses Shodan and DNS lookups to map the target's external footprint without touching the server. Active testing then chains nmap port scanning, Nikto web analysis, Gobuster directory brute-forcing, WhatWeb fingerprinting, and SearchSploit CVE lookups — each tool's output feeding the next decision Claude makes.

The backend is a FastAPI server acting as an MCP client, exposing Linux security tools as callable functions through a FastMCP server. Claude receives structured tool results and reasons over them to determine what to probe next, effectively replicating the decision tree of a human penetration tester.

Results are persisted in Supabase (PostgreSQL) and surfaced through a React 19 frontend with real-time streaming via SSE. Google OAuth gates access, and each report is scored by severity tier. Deployed live at blindspot-scan.vercel.app.`,
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "Anthropic Claude",
      "MCP",
      "Supabase",
      "Tailwind CSS",
    ],
    categories: ["React", "Python", "AI"],
    githubLink: "https://github.com/sudhishkgopal/BlindSpot",
    image: "/images/projects/blindspot.png",
  },
  {
    id: "careline",
    title: "CareLine",
    shortDescription:
      "Award-winning geospatial dashboard that maps transit gaps between communities and hospitals, proposing targeted shuttle routes to reduce missed appointments.",
    longDescription: `Healthcare access fails long before a patient reaches the clinic door — 21% of U.S. adults without reliable transit skip needed medical care entirely. CareLine makes this invisible crisis visible by combining hospital encounter records, public transit feeds, and census geography into a single interactive map.

The project analyzed Stormont Vail Health patient data from Topeka, Kansas across 141 Census block groups. A custom Python scoring engine evaluates each tract on five transit dimensions — total travel time, walking time to stops, bus headway frequency, and service window coverage — producing a 0–10 Public Transit Score per area. Anchored normalization (fixed best/worst benchmarks) prevents outliers from skewing results, and deal-breaker flags catch catastrophic single factors that averaged scores would mask.

For high-risk tracts, the system generates proposed shuttle routes using OSRM road geometry and real Topeka Metro GTFS schedules, enabling side-by-side before/after comparisons of estimated trip times. The entire architecture is fully static: Python pipeline scripts pre-compute all data into committed JSON files, eliminating runtime dependencies while keeping the Leaflet.js dashboard fully dynamic.

Won 1st Place — Best Use of External Data at OSU ASA DataFest 2026, competing against teams from across the university.`,
    techStack: [
      "Python",
      "JavaScript",
      "Leaflet.js",
      "OSRM",
      "GTFS",
      "R",
    ],
    categories: ["Python", "JavaScript"],
    githubLink: "https://github.com/sudhishkgopal/CareLine",
    image: "/images/projects/careline.png",
  },
  {
    id: "graph-sudoku",
    title: "Graph Sudoku",
    shortDescription:
      "Interactive Sudoku game with a D3.js graph visualization layer that reveals the constraint graph underlying every puzzle — four difficulty modes including Killer Sudoku.",
    longDescription: `Every Sudoku board is secretly a graph: cells are nodes, and an edge connects any two cells that share a row, column, or 3×3 box — meaning they cannot hold the same digit. Graph Sudoku makes this mathematical structure visible by layering a D3.js constraint graph directly onto the puzzle, letting players toggle between game mode and graph mode as they solve.

The puzzle engine generates boards using a backtracking algorithm seeded with configurable difficulty parameters. Classic mode follows standard Sudoku rules; Killer Sudoku introduces cage constraints that require cells within a region to sum to a target value, adding a combinatorial layer on top of the standard graph constraints.

State is managed through Zustand, keeping the board, notes, undo history, and timer synchronized without prop drilling. The D3.js graph renders in an SVG overlay, dynamically updating node colors to reflect constraint violations and resolved cells in real time.

Additional features include full keyboard navigation, a built-in note-taking system for candidate digits, dark/light mode toggle, and a global visit counter backed by a lightweight API. Deployed as a PWA at graphsudoku.vercel.app.`,
    techStack: [
      "TypeScript",
      "React",
      "D3.js",
      "Zustand",
      "Vite",
      "Tailwind CSS",
    ],
    categories: ["React", "TypeScript"],
    githubLink: "https://github.com/sudhishkgopal/Sudoku",
    image: "/images/projects/graph-sudoku.png",
  },
  {
    id: "bothunter",
    title: "BotHunter",
    shortDescription:
      "Graph engine that detects coordinated bot farms on social networks using K-Core Decomposition and multi-signal risk scoring on 80K+ node datasets.",
    longDescription: `Bot farms exploit the structure of social graphs — mutual-follow cliques create dense subgraphs that stand out sharply once low-connectivity noise is pruned away. BotHunter applies K-Core Decomposition to recursively strip peripheral nodes until only tightly-connected cores remain, then scores each surviving account across three weighted signals.

Degree Asymmetry (40%) flags accounts with wildly disproportionate follower-to-following ratios, the hallmark of star bot patterns. Clustering Coefficient Inverse (35%) penalizes accounts that lack the organic triangular connections of genuine social relationships. K-Core Density (25%) scores how deeply embedded an account sits within a mutual-follow clique.

A key challenge is the celebrity problem: legitimate influencers also show high degree asymmetry. BotHunter resolves this by weighting local clustering coefficients heavily — real influencers have followers who connect with each other; bot farms do not.

The engine runs as a Pregel-style distributed system using Python's multiprocessing module in a Master-Worker pattern, enabling it to process Stanford's SNAP Twitter dataset (81,306 nodes, 1,768,149 edges) without memory exhaustion. Results are persisted to SQLite via SQLAlchemy and surfaced through a Streamlit dashboard with Pyvis and Plotly graph visualizations. A FastAPI layer exposes the detection pipeline as a REST API.`,
    techStack: [
      "Python",
      "NetworkX",
      "FastAPI",
      "Streamlit",
      "SQLite",
      "Pyvis",
    ],
    categories: ["Python"],
    githubLink: "https://github.com/sudhishkgopal/BotHunter",
    image: "/images/projects/bothunter.png",
  },
  {
    id: "ships-and-asteroids",
    title: "Ships and Asteroids",
    shortDescription:
      "A classic arcade-style space shooter built with real-time physics simulation and collision detection.",
    longDescription: `Ships and Asteroids is an arcade-style space game that combines responsive controls with realistic 2D physics. The player pilots a ship through an asteroid field, dodging and destroying obstacles while managing momentum and fuel.

The game engine implements a custom physics loop running at 60 FPS, handling velocity, acceleration, angular momentum, and friction. Asteroids are procedurally generated with randomized sizes, rotational speeds, and trajectories. When destroyed, larger asteroids fragment into smaller pieces with conservation of momentum applied to each fragment.

Collision detection uses a two-phase approach: a broad-phase spatial hash grid quickly eliminates distant object pairs, followed by narrow-phase polygon intersection tests for precise hit detection. This keeps performance smooth even with dozens of objects on screen simultaneously.

The rendering layer uses HTML5 Canvas with double-buffering for flicker-free animation. A particle system adds visual polish with engine thrust trails, explosion effects, and debris scattering. Score tracking, progressive difficulty scaling, and a high-score leaderboard round out the gameplay loop.`,
    techStack: [
      "C",
      "Assembly",
      "Linux",
      "Vim",
      "Physics Sim",
      "Collision Sim",
    ],
    categories: ["C"],
    githubLink: "https://github.com/sudhishkgopal/ships-and-asteroids",
    image: "/images/projects/ships-and-asteroids.png",
  },
  {
    id: "garden-robot",
    title: "Garden Robot",
    shortDescription:
      "An autonomous gardening robot with sensor-driven irrigation, soil monitoring, and scheduled plant care routines.",
    longDescription: `Garden Robot is an embedded systems project that automates plant care through sensor fusion and intelligent scheduling. The system monitors soil moisture, ambient temperature, humidity, and light levels in real time, then makes autonomous decisions about when and how much to water each plant zone.

The hardware platform combines a microcontroller with an array of capacitive soil moisture sensors, a DHT22 temperature/humidity sensor, and a photoresistor for light measurement. A relay module controls solenoid valves connected to a drip irrigation system, enabling zone-by-zone watering precision.

The control logic implements a state machine that transitions between monitoring, watering, and idle states based on sensor thresholds and time-of-day scheduling. Each plant zone has configurable moisture targets — the system waters until the target is reached, then monitors the dry-down curve to learn the zone's specific drainage characteristics over time.

A lightweight web dashboard built with Python and Flask displays real-time sensor readings, watering history, and allows remote override of the automated schedule. All sensor data is logged to a local SQLite database for trend analysis and water usage tracking.`,
    techStack: [
      "C++",
      "Sensors",
      "PID Control",
      "Embedded Systems",
      "CAD",
    ],
    categories: ["C++"],
    githubLink: "https://github.com/sudhishkgopal/FEHRobot",
    image: "/images/projects/garden-robot.png",
  },
  {
    id: "hollow-knight-clone",
    title: "Hollow Knight Clone",
    shortDescription:
      "A 2D action-adventure game built with MonoGame — full combat system, A* enemy pathfinding, boss fights, and multi-room world with parallax backgrounds.",
    longDescription: `Built as a term project for CSE 3902 at The Ohio State University, this Hollow Knight-inspired game recreates the core feel of the original's tight combat and atmospheric world using C# and the MonoGame framework on .NET 9.

The Knight's movement system supports running, variable-height jumping, and an air dash with cooldown — all delegated to discrete subsystems (KnightPhysics, KnightCombat, KnightHealth, KnightDash) through component decomposition, keeping the core entity class lean and each behavior independently testable.

Combat includes directional sword slashes (side, up, down attacks), pogo bouncing off enemies, and a soul-fueled Vengeful Spirit spell. Enemies range from simple Crawlids to Vengeflies that use A* pathfinding to pursue the player across the room, up to a three-phase Mantis Lords boss fight.

The world is organized into multiple rooms with screen-fade transitions and parallax scrolling backgrounds. An XML-driven asset pipeline handles level layouts, audio triggers, and sprite loading declaratively, decoupling content from code. Checkpointing at benches and a healing mechanic tied to the soul gauge round out the player loop.

Developed collaboratively with a team of five as part of the OSU Software Engineering course.`,
    techStack: [
      "C#",
      "MonoGame",
      ".NET 9",
      "A* Pathfinding",
      "XML",
    ],
    categories: ["C#"],
    githubLink: "https://github.com/sudhishkgopal/HollowKnight_Clone",
    image: "/images/projects/hollow-knight-clone.png",
  },
  {
    id: "serviq",
    title: "ServiQ",
    shortDescription:
      "Predictive queue management system with ARIMA forecasting and real-time WebSocket updates.",
    longDescription: `ServiQ addresses a universal pain point in service industries: unpredictable wait times. Whether at a clinic, government office, or restaurant, customers are left guessing how long they'll wait, and businesses struggle to allocate staff efficiently across fluctuating demand patterns.

The system uses historical queue data to build ARIMA time-series models that forecast demand at 15-minute intervals throughout the day. These predictions feed into a dynamic resource allocation engine that recommends optimal staffing levels and service window assignments. When actual queue length deviates from the forecast, the system re-calibrates in real time.

The customer-facing interface is a React application that connects via WebSocket to receive live position updates, estimated wait times, and "your turn is approaching" notifications. This transparency alone reduced no-show rates by approximately 40% in pilot testing, as customers could time their arrival precisely.

The backend is built on FastAPI with async request handling for high concurrency. Redis serves as both the queue data store (using sorted sets for priority queuing) and the pub/sub layer for WebSocket event distribution. The entire stack is containerized with Docker Compose for one-command deployment.`,
    techStack: ["React", "JavaScript", "Firebase", "MapBox SDK", "HTML/CSS"],
    categories: ["React", "Firebase"],
    githubLink: "https://github.com/mayurreddy06/ServiQ",
    image: "/images/projects/serviq.png",
  },
  {
    id: "ai-enhanced-wellness-coach",
    title: "AI-Enhanced Wellness Coach",
    shortDescription:
      "An intelligent health platform leveraging GPT-4o and biometric data analysis to provide personalized, real-time wellness recommendations.",
    longDescription: `The AI-Enhanced Wellness Coach is a sophisticated health platform that bridges the gap between static health tracking and dynamic, personalized coaching. By leveraging Large Language Models (LLMs), the system transforms raw user biometrics—including BMI, age, activity levels, and dietary habits—into high-context, actionable wellness plans.

The core detection and recommendation engine is powered by an integration with the GPT-4o model. The application processes user data via high-fidelity prompt engineering to generate optimized fitness routines and nutritional guidance tailored to an individual's physiological profile. This approach moves beyond surface-level heuristics to provide a truly responsive coaching experience.

The system features a component-driven architecture where user sessions and biometric states are managed to ensure consistency across the platform. By analyzing input patterns, the coach identifies trends in user progress, allowing the AI to refine its suggestions in a continuous feedback loop.

The backend focuses on secure data ingestion and the efficient processing of health metrics, while the frontend provides a clean, responsive interface for real-time insight delivery. This project demonstrates the scalable application of Generative AI in the digital health space, prioritizing both technical precision and user-centric design.`,
    techStack: [
      "Python",
      "GPT-4o",
      "JavaScript",
      "HTML",
      "CSS",
      "LLM Integration"
    ],
    categories: ["Python", "AI"],
    githubLink: "https://github.com/mayurreddy06/AI-Enhanced-Wellness-Coach",
    image: "/images/projects/ai-wellness-coach.png",
  },
  {
    id: "amazon-clone",
    title: "Amazon Clone",
    shortDescription:
      "A full-stack e-commerce platform replicating core Amazon functionality with auth, cart, and payment processing.",
    longDescription: `Amazon Clone is a full-stack e-commerce application that replicates the core shopping experience — product browsing, search, cart management, user authentication, and checkout with payment processing.

The frontend is built with React, featuring a component-driven architecture with a responsive product grid, dynamic search with filtering, and a persistent shopping cart managed through React Context. Product pages display images, descriptions, pricing, and star ratings with a familiar layout modeled after the actual Amazon interface.

Authentication is handled through Firebase Auth, supporting email/password sign-up and Google OAuth. User sessions persist across browser refreshes, and protected routes ensure that checkout and order history are only accessible to authenticated users.

The checkout flow integrates Stripe for secure payment processing. When a user confirms their order, the frontend creates a Stripe PaymentIntent via a serverless Cloud Function, processes the payment, and on success writes the order details to Cloud Firestore. Order history is then available on the user's account page with itemized receipts.

The backend leverages Firebase's serverless stack — Cloud Functions for API logic, Firestore for product catalog and order storage, and Firebase Hosting for the production deployment. This architecture scales automatically with no server management required.`,
    techStack: [
      "TypeScript",
      "HTML",
      "Firebase",
      "React",
    ],
    categories: ["React", "Firebase"],
    githubLink: "https://github.com/sudhishkgopal/amazon-clone",
    image: "/images/projects/amazon-clone.png",
  },
];

export const allCategories = [
  "All",
  ...new Set(projects.flatMap((p) => p.categories)),
];
