export const projects = [
  {
    id: "graphdb-bot-hunter",
    title: "GraphDB Bot Hunter",
    shortDescription:
      "Social media bot detection via k-core pruning and community detection on large-scale interaction graphs.",
    longDescription: `Social media platforms face a growing crisis of inauthentic accounts — coordinated bot networks that manipulate public discourse, inflate engagement metrics, and erode user trust. Traditional detection approaches rely on surface-level heuristics like posting frequency or account age, which sophisticated bots easily circumvent.

GraphDB Bot Hunter takes a fundamentally different approach by modeling the social network as a directed graph and analyzing its structural properties. The system ingests real-time interaction data (follows, retweets, replies) and constructs a NetworkX graph where nodes represent accounts and edges represent interactions.

The core detection pipeline applies k-core decomposition to prune peripheral nodes, then runs community detection algorithms (Louvain and Label Propagation) to identify tightly-knit clusters of coordinated behavior. Within each community, the engine computes centrality metrics — degree centrality, betweenness centrality, and clustering coefficients — to score the likelihood of inauthentic activity.

Flagged accounts and their interaction subgraphs are persisted in a Neo4j graph database for longitudinal analysis. A monitoring dashboard provides real-time visualization of detected bot clusters and their evolution over time.`,
    techStack: [
      "Python",
      "NetworkX",
      "Docker",
      "PostgreSQL",
    ],
    categories: ["Python"],
    githubLink: "https://github.com/mayurreddy06/ServiQ",
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
  },
  {
    id: "ai-enhanced-wellness-coach",
    title: "AI-Enhanced Wellness Coach",
    shortDescription:
      "An intelligent health platform leveraging GPT-4o and biometric data analysis to provide personalized, real-time wellness recommendations.",
    longDescription: `The AI-Enhanced Wellness Coach is a sophisticated health platform that bridges the gap between static health tracking and dynamic, personalized coaching. By leveraging Large Language Models (LLMs), the system transforms raw user biometrics—including BMI, age, activity levels, and dietary habits—into high-context, actionable wellness plans.

The core detection and recommendation engine is powered by an integration with the GPT-4o model. The application processes user data via high-fidelity prompt engineering to generate optimized fitness routines and nutritional guidance tailored to an individual’s physiological profile. This approach moves beyond surface-level heuristics to provide a truly responsive coaching experience.

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
  },
];

export const allCategories = [
  "All",
  ...new Set(projects.flatMap((p) => p.categories)),
];
