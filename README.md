Portfolio Website

A modern, responsive, and accessible portfolio website built with React, TypeScript, and Vite. This project demonstrates best practices in web development, including performance optimization, SEO, accessibility, and a clean user experience.
Table of Contents

    Overview

    Tech Stack

    Features

    Pages and Components

    Development Setup

    Testing

    Build and Deployment

    Contributing

    License

Overview

This is a Single Page Application (SPA) portfolio website designed to showcase my personal projects, skills, and experience. The site is optimized for performance and accessibility, with a mobile-first design and features such as lazy loading, responsive layouts, and an interactive user interface.
Tech Stack

    Frontend: React 18, TypeScript, Vite, TailwindCSS, Shadcn/UI, Wouter

    Backend: Node.js, Express.js, TypeScript, Drizzle ORM, Session-based Authentication

    Development Tools: Vitest, React Testing Library

Features
Performance Optimization

    Lazy loading of images and components

    Code splitting for faster initial load

    Asset optimization (minification, image compression)

SEO Features

    Meta tags for social media and search engines

    Sitemap.xml for improved crawling

    robots.txt to control indexing

    Semantic HTML structure for better search engine understanding

Accessibility

    ARIA labels for better screen reader support

    Keyboard navigation support

    Color contrast compliance for better readability

Responsive Design

    Mobile-first approach

    Adaptive layouts for different screen sizes

    Touch-friendly interactions

User Interface

    Hero section with animated typing effect

    Portfolio grid to display projects

    Interactive project details page with technology stack and screenshots

    Contact form with validation

    Custom 404 error page

Pages and Components
Main Pages

    Home Page: Features a hero section, skills showcase, project portfolio grid, and a contact form.

    Project Detail Page: Includes an overview of individual projects, their challenges, solutions, features, and tech stacks.

    Privacy Policy Page: Displays legal privacy information in a clean and readable layout.

    Terms of Service Page: Provides terms and conditions and the user agreement.

    404 Not Found Page: A custom error page with a link back to the home page.

Key Components

    UI Components: Button, Input, Card, Dialog, Alert, Toast notifications, Form elements, and Navigation components.

    Custom Components: ProjectCard, TechIcon, TypingAnimation, ScrollToTop, Loading Skeletons.

Development Setup

To get started with the project locally, follow these steps:

    Clone the repository:

git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website

Install dependencies:

npm install

Run the development server:

    npm run dev

    This will start the development server, and you can view the site at http://localhost:3000.

Testing

This project uses Vitest for unit testing and React Testing Library for component testing. To run tests:

    Run the tests:

    npm run test

    This will execute all unit tests in the project.

Build and Deployment
Hosting on GitHub Pages

To deploy the website on GitHub Pages, follow these steps:

    Install GitHub Pages package:

    Install the gh-pages package to handle the deployment.

npm install gh-pages --save-dev

Add homepage field in package.json:

Add a "homepage" field in your package.json to specify the GitHub Pages URL. Replace yourusername and yourrepositoryname with your GitHub username and the name of the repository.

"homepage": "https://yourusername.github.io/yourrepositoryname"

Add deployment scripts to package.json:

Add the following scripts to the "scripts" section of your package.json to handle the build and deployment process.

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Build the production-ready site:

Now, build your project for production.

npm run build

This will create a dist folder with the production files.

Deploy to GitHub Pages:

Deploy the site using the gh-pages command:

npm run deploy

This will push the contents of the dist folder to the gh-pages branch of your GitHub repository.

Access your deployed site:

After deployment, your site will be available at:

    https://yourusername.github.io/yourrepositoryname

    Replace yourusername and yourrepositoryname with your actual GitHub username and repository name.

Contributing

Contributions are welcome! If you have any suggestions or find any bugs, feel free to open an issue or submit a pull request.

    Fork the repository.

    Create a new branch for your feature or fix.

    Make your changes.

    Commit and push your changes.

    Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
