import { ProjectData } from "../components/ProjectCard";

/**
 * Data for the project cards
 */
export const projectsData: ProjectData[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure payment processing.",
    imgSrc: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "E-commerce Platform",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://e-commerce-demo.example.com",
    githubLink: "https://github.com/example/e-commerce",
    detailContent: {
      overview: "A comprehensive e-commerce platform designed to provide businesses with a scalable and customizable online store solution. The platform features a clean, intuitive user interface and robust backend functionality.",
      challenge: "Creating a secure, high-performance e-commerce system that can handle complex product catalogs, inventory management, and payment processing while providing a seamless user experience across devices.",
      solution: "Implemented a React-based frontend with server-side rendering for SEO optimization, coupled with a Node.js backend and MongoDB for flexible data storage. Integrated Stripe for secure payment processing and implemented a microservice architecture for scalability.",
      features: [
        "Responsive product catalog with advanced filtering and search",
        "Secure user authentication and profile management",
        "Real-time inventory tracking and management",
        "Stripe payment integration with multiple payment methods",
        "Order management and tracking system",
        "Admin dashboard with analytics and reporting",
        "Multi-language and multi-currency support"
      ],
      techStack: [
        { name: "React", description: "Frontend UI library for building interactive user interfaces" },
        { name: "Node.js", description: "Backend JavaScript runtime for building scalable server applications" },
        { name: "MongoDB", description: "NoSQL database for flexible data storage and retrieval" },
        { name: "Stripe API", description: "Payment processing platform for secure transactions" },
        { name: "Redis", description: "In-memory data structure store for caching and performance" },
        { name: "Docker", description: "Containerization for consistent development and deployment" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Product Listing Page", caption: "Product catalog with filtering and search capabilities" },
        { src: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Shopping Cart", caption: "User-friendly shopping cart with real-time updates" },
        { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Admin Dashboard", caption: "Comprehensive admin dashboard for store management" }
      ],
      testimonial: {
        text: "This e-commerce platform transformed our online business. The interface is intuitive for our customers, and the backend management tools have streamlined our operations significantly.",
        author: "Jane Smith",
        position: "CEO, Fashion Boutique"
      },
      outcome: "The platform has been successfully deployed for multiple clients, resulting in a 45% increase in online sales and a 30% reduction in cart abandonment rates. The solution continues to evolve with regular feature updates and performance optimizations."
    }
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "A productive task management application with drag-and-drop interface, reminders, and team collaboration features.",
    imgSrc: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "Task Management App",
    technologies: ["Vue.js", "Firebase", "Vuex", "PWA"],
    demoLink: "https://task-app-demo.example.com",
    githubLink: "https://github.com/example/task-app",
    detailContent: {
      overview: "A modern task management application designed to help individuals and teams organize their workflows, track progress, and collaborate efficiently on projects of any size.",
      challenge: "Developing a real-time collaborative task management system that works seamlessly across devices while maintaining data integrity and providing an intuitive user experience.",
      solution: "Built a Progressive Web App using Vue.js and Firebase for real-time data synchronization. Implemented Vuex for state management and designed a responsive interface with drag-and-drop functionality for intuitive task organization.",
      features: [
        "Kanban board with customizable columns and drag-and-drop functionality",
        "Real-time collaboration with live updates across devices",
        "Task categorization with tags, priorities, and due dates",
        "Customizable notifications and reminders",
        "File attachments and comments on tasks",
        "Time tracking and progress reporting",
        "Offline functionality with automatic sync when reconnected"
      ],
      techStack: [
        { name: "Vue.js", description: "Progressive JavaScript framework for building user interfaces" },
        { name: "Firebase", description: "Backend-as-a-Service for real-time database and authentication" },
        { name: "Vuex", description: "State management pattern and library for Vue.js applications" },
        { name: "Progressive Web App", description: "Technologies for creating app-like experiences on the web" },
        { name: "Cloud Functions", description: "Serverless computing for automating backend processes" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Kanban Board View", caption: "Drag-and-drop kanban board for task management" },
        { src: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Task Detail View", caption: "Detailed task view with comments and attachments" },
        { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Mobile View", caption: "Responsive design for mobile devices" }
      ],
      testimonial: {
        text: "This task management app has revolutionized how our team organizes work. The real-time collaboration features and intuitive interface have made us significantly more productive.",
        author: "Michael Johnson",
        position: "Project Manager, TechSolutions Inc."
      },
      outcome: "The application has been adopted by over 5,000 users within the first six months of launch. User feedback has been overwhelmingly positive, particularly regarding the intuitive interface and real-time collaboration features. Ongoing development includes additional integrations with popular productivity tools."
    }
  },
  {
    id: "weather-forecast",
    title: "Weather Forecast App",
    description: "A weather application providing real-time forecasts, radar maps, and detailed meteorological data for any location.",
    imgSrc: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "Weather Forecast App",
    technologies: ["React Native", "Redux", "Weather API", "Geolocation"],
    demoLink: "https://weather-app-demo.example.com",
    githubLink: "https://github.com/example/weather-app",
    detailContent: {
      overview: "A comprehensive weather application that provides users with accurate, up-to-date weather forecasts, interactive radar maps, and detailed meteorological data for locations worldwide.",
      challenge: "Creating a cross-platform mobile application that delivers accurate weather information with a beautiful, intuitive interface while optimizing for performance and minimizing data usage.",
      solution: "Developed a React Native application with Redux for state management and integrated with multiple weather data providers for reliable forecasts. Implemented efficient geolocation services and optimized data caching for reduced API calls.",
      features: [
        "Real-time weather forecasts with hourly and 10-day predictions",
        "Interactive radar maps with precipitation tracking",
        "Geolocation for automatic local weather updates",
        "Customizable weather alerts and notifications",
        "Detailed meteorological data (humidity, pressure, wind, etc.)",
        "Weather history and trend analysis",
        "Multiple location tracking with easy switching"
      ],
      techStack: [
        { name: "React Native", description: "Framework for building native mobile applications" },
        { name: "Redux", description: "Predictable state container for managing application state" },
        { name: "Weather APIs", description: "Third-party services providing meteorological data" },
        { name: "Geolocation Services", description: "APIs for determining user location" },
        { name: "D3.js", description: "Library for creating data visualizations" },
        { name: "Offline Storage", description: "Local data persistence for offline functionality" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Current Weather View", caption: "Main screen showing current weather conditions" },
        { src: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Forecast View", caption: "10-day weather forecast with detailed information" },
        { src: "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Radar Map", caption: "Interactive radar map showing precipitation patterns" }
      ],
      testimonial: {
        text: "This weather app stands out with its accuracy and beautiful interface. The radar maps and detailed forecasts have become essential tools for planning my outdoor activities.",
        author: "Emily Chen",
        position: "Outdoor Enthusiast"
      },
      outcome: "The weather application has reached over 100,000 downloads across iOS and Android platforms. It maintains a 4.8/5 star rating and has become known for its accuracy and intuitive design. Continuous improvements focus on adding new data visualizations and enhancing prediction accuracy."
    }
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A comprehensive fitness application that tracks workouts, nutrition, and provides personalized training recommendations.",
    imgSrc: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "Fitness Tracker",
    technologies: ["Flutter", "Dart", "Firebase", "HealthKit"],
    demoLink: "https://fitness-tracker-demo.example.com",
    githubLink: "https://github.com/example/fitness-tracker",
    detailContent: {
      overview: "A comprehensive fitness tracking application that helps users monitor their physical activity, nutrition, and overall health while providing personalized recommendations for improvement.",
      challenge: "Developing a cross-platform fitness app that accurately tracks various workout types, integrates with health devices, and delivers personalized insights while maintaining user privacy and data security.",
      solution: "Built a Flutter application that integrates with HealthKit and Google Fit APIs for accurate health data collection. Implemented machine learning algorithms for workout analysis and recommendation generation, with Firebase for secure user data storage.",
      features: [
        "Workout tracking with support for various exercise types",
        "Nutrition logging and calorie tracking",
        "Integration with wearable devices and health platforms",
        "Personalized workout recommendations based on goals and progress",
        "Progress visualization with detailed charts and metrics",
        "Social features for community support and challenges",
        "Automated workout plans with adjustable difficulty"
      ],
      techStack: [
        { name: "Flutter", description: "UI toolkit for building natively compiled applications" },
        { name: "Dart", description: "Programming language optimized for building mobile, desktop, and web apps" },
        { name: "Firebase", description: "Platform for authentication, database, and analytics" },
        { name: "HealthKit/Google Fit", description: "Health and fitness data platforms" },
        { name: "TensorFlow Lite", description: "Machine learning framework for mobile applications" },
        { name: "SQLite", description: "Local database for offline data storage" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Dashboard View", caption: "Main dashboard with activity summary and goals" },
        { src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Workout Tracking", caption: "Detailed workout tracking interface" },
        { src: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Progress Charts", caption: "Visual representation of fitness progress over time" }
      ],
      testimonial: {
        text: "This fitness tracker has completely changed my approach to working out. The personalized recommendations and progress tracking have kept me motivated and helped me achieve results I never thought possible.",
        author: "Alex Rodriguez",
        position: "Fitness Enthusiast"
      },
      outcome: "The fitness tracker has gained a dedicated user base of over 75,000 active users. User retention rates are 40% higher than industry average, attributed to the personalized workout recommendations and social features. The app continues to evolve with new exercise types and enhanced AI capabilities."
    }
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "An innovative AI-powered application that generates customized content based on user specifications and requirements.",
    imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "AI Content Generator",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API"],
    demoLink: "https://ai-content-demo.example.com",
    githubLink: "https://github.com/example/ai-content-generator",
    detailContent: {
      overview: "An innovative AI-powered content generation platform that enables users to create high-quality text, images, and other media content based on specific parameters and requirements.",
      challenge: "Building a versatile content generation system that produces high-quality, contextually relevant outputs across various content types while providing an intuitive interface for non-technical users.",
      solution: "Developed a Python-based application using TensorFlow and integrated with OpenAI's GPT and DALL-E APIs for text and image generation. Created a Flask web application with a user-friendly interface for content specification and generation.",
      features: [
        "Text generation for various content types (articles, blog posts, product descriptions)",
        "Image creation based on textual descriptions",
        "Content customization with style, tone, and format options",
        "Bulk content generation capabilities",
        "Content editing and refinement tools",
        "SEO optimization suggestions",
        "Content performance analytics"
      ],
      techStack: [
        { name: "Python", description: "Programming language for backend development and AI processing" },
        { name: "TensorFlow", description: "Machine learning library for training custom models" },
        { name: "Flask", description: "Web framework for creating the application interface" },
        { name: "OpenAI API", description: "Advanced AI models for text and image generation" },
        { name: "PostgreSQL", description: "Database for storing user data and generated content" },
        { name: "Redis", description: "In-memory data store for caching and performance optimization" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Content Dashboard", caption: "Main dashboard for content generation projects" },
        { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Text Generation Interface", caption: "Intuitive interface for specifying text content parameters" },
        { src: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Image Generation Results", caption: "Gallery of AI-generated images based on user prompts" }
      ],
      testimonial: {
        text: "The AI Content Generator has revolutionized our content creation process. We're now able to produce high-quality content at scale, which has significantly improved our marketing efforts and saved countless hours of work.",
        author: "Sarah Williams",
        position: "Marketing Director, Digital Innovations"
      },
      outcome: "The platform has been adopted by over 200 businesses ranging from small startups to enterprise-level companies. Users report an average 70% reduction in content creation time and a 35% increase in engagement metrics for AI-generated content compared to their previous content strategies."
    }
  },
  {
    id: "investment-tracker",
    title: "Investment Portfolio Tracker",
    description: "A comprehensive investment tracking tool that monitors stocks, crypto, and other assets with advanced analytics and visualizations.",
    imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "Investment Portfolio Tracker",
    technologies: ["Angular", "TypeScript", "D3.js", "Financial APIs"],
    demoLink: "https://investment-tracker-demo.example.com",
    githubLink: "https://github.com/example/investment-tracker",
    detailContent: {
      overview: "A sophisticated investment portfolio tracking application that helps investors monitor and analyze their financial assets across multiple investment types, markets, and currencies.",
      challenge: "Creating a secure, real-time financial tracking system that aggregates data from diverse sources, provides meaningful analytics, and presents complex financial information in an accessible way for investors of all experience levels.",
      solution: "Built an Angular application with TypeScript for type safety and D3.js for advanced data visualizations. Integrated with multiple financial APIs for real-time market data and implemented secure user authentication and data encryption.",
      features: [
        "Multi-asset portfolio tracking (stocks, bonds, crypto, commodities)",
        "Real-time market data and price alerts",
        "Performance analytics with customizable metrics",
        "Interactive charts and visualizations",
        "Automatic portfolio rebalancing suggestions",
        "Tax reporting and documentation",
        "Scenario planning and risk assessment tools"
      ],
      techStack: [
        { name: "Angular", description: "Framework for building dynamic web applications" },
        { name: "TypeScript", description: "Typed superset of JavaScript for enhanced code quality" },
        { name: "D3.js", description: "Library for creating sophisticated data visualizations" },
        { name: "Financial APIs", description: "Multiple services for real-time market data" },
        { name: "Node.js", description: "Backend runtime for API integrations and data processing" },
        { name: "MongoDB", description: "Database for storing user portfolios and preferences" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Portfolio Dashboard", caption: "Comprehensive view of the investment portfolio" },
        { src: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Performance Charts", caption: "Interactive performance visualization with comparison metrics" },
        { src: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Asset Allocation", caption: "Visual representation of portfolio diversification" }
      ],
      testimonial: {
        text: "This portfolio tracker has given me insights into my investments that I never had before. The visualizations help me understand my asset allocation and performance trends, making me a more confident investor.",
        author: "Robert Chen",
        position: "Individual Investor"
      },
      outcome: "The investment tracker has been adopted by both individual investors and financial advisors, with over 15,000 active portfolios being managed. Users report making more informed investment decisions and having a clearer understanding of their financial positions thanks to the intuitive visualizations and comprehensive analytics."
    }
  },
  {
    id: "home-automation",
    title: "Home Automation System",
    description: "An IoT-based home automation solution that enables remote control of home devices, energy monitoring, and smart scheduling.",
    imgSrc: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    imgAlt: "Home Automation System",
    technologies: ["IoT", "Raspberry Pi", "MQTT", "Node.js"],
    demoLink: "https://home-automation-demo.example.com",
    githubLink: "https://github.com/example/home-automation",
    detailContent: {
      overview: "A comprehensive IoT-based home automation system that enables users to control and monitor various aspects of their homes remotely, optimize energy usage, and enhance home security and comfort.",
      challenge: "Developing a reliable, secure home automation system that integrates with various IoT devices, provides intuitive controls, and operates efficiently even with intermittent internet connectivity.",
      solution: "Created a modular system using Raspberry Pi as the central hub with MQTT for efficient device communication. Built a Node.js backend with a responsive web interface and mobile app for remote control and monitoring.",
      features: [
        "Remote control of lights, thermostats, and appliances",
        "Automated scheduling and scene creation",
        "Energy usage monitoring and optimization",
        "Motion detection and security alerts",
        "Voice control integration (Alexa, Google Assistant)",
        "Presence detection for automated responses",
        "Detailed usage analytics and recommendations"
      ],
      techStack: [
        { name: "Raspberry Pi", description: "Single-board computer serving as the central hub" },
        { name: "MQTT", description: "Lightweight messaging protocol for IoT communication" },
        { name: "Node.js", description: "JavaScript runtime for the backend server" },
        { name: "React", description: "JavaScript library for the user interface" },
        { name: "React Native", description: "Framework for the mobile application" },
        { name: "InfluxDB", description: "Time-series database for storing sensor data" }
      ],
      screenshots: [
        { src: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Control Dashboard", caption: "Main dashboard for controlling home devices" },
        { src: "https://images.unsplash.com/photo-1558002038-bb0401b9e6b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Energy Monitoring", caption: "Energy usage monitoring and analysis" },
        { src: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", alt: "Security Camera View", caption: "Integrated security camera monitoring" }
      ],
      testimonial: {
        text: "The home automation system has transformed our living experience. The energy monitoring features have helped us reduce our electricity bills by 30%, and the convenience of controlling everything from our phones is invaluable.",
        author: "Thomas & Lisa Miller",
        position: "Homeowners"
      },
      outcome: "The system has been implemented in over 500 homes, with users reporting an average 25% reduction in energy consumption and significant improvements in home comfort and convenience. The open-source nature of the project has fostered a community of developers who continue to contribute new features and device integrations."
    }
  }
];
