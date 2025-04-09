---
layout: page
title: Code Examples
permalink: /code-examples/
custom_css: code-highlighter
custom_js: code-highlighter
extra_head: >
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
---

<!-- This hidden div provides explanations data to the JavaScript code -->
<script type="application/json" id="code-explanation-data">
{
  {% for item in site.data.code_explanations %}
    "{{ item[0] }}": {
      "title": {{ item[1].title | jsonify }},
      "explanation": {{ item[1].explanation | jsonify }}
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
}
</script>

# Interactive Code Examples

This page demonstrates my coding skills with interactive examples. Click on any line of code to select it, or use the buttons to see explanations.

## HTML Example

<div class="code-snippet-container" id="portfolio-html">
<pre><code class="language-html">
&lt;section class="portfolio-section">
  &lt;h2 class="section-title">My Projects&lt;/h2>
  &lt;div class="projects-grid">
    &lt;article class="project-card">
      &lt;div class="project-image">
        &lt;img src="/assets/images/project1.jpg" alt="Project 1">
      &lt;/div>
      &lt;h3 class="project-title">Portfolio Website&lt;/h3>
      &lt;p class="project-description">A responsive portfolio website built with Jekyll.&lt;/p>
      &lt;div class="project-links">
        &lt;a href="#" class="project-link">View Demo&lt;/a>
        &lt;a href="#" class="project-link">Source Code&lt;/a>
      &lt;/div>
    &lt;/article>
  &lt;/div>
&lt;/section>
</code></pre>
</div>

## CSS Example

<div class="code-snippet-container" id="responsive-css">
<pre><code class="language-css">
/* Mobile First Approach */
.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

/* Tablet Styles */
@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</code></pre>
</div>

## JavaScript Example

<div class="code-snippet-container" id="animation-js">
<pre><code class="language-javascript">
/**
 * Creates a smooth scrolling animation
 * @param {Element} element - The element to scroll to
 * @param {number} duration - The duration of the animation in ms
 */
function smoothScroll(element, duration) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;
  
  // Easing function for natural motion
  function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }
  
  // Animation function
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scrollY = easeInOutQuad(
      timeElapsed, 
      startPosition, 
      distance, 
      duration
    );
    
    window.scrollTo(0, scrollY);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  // Start animation
  requestAnimationFrame(animation);
}

// Example usage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      smoothScroll(target, 800);
    }
  });
});
</code></pre>
</div>

## Python Example

<div class="code-snippet-container" id="python-class">
<pre><code class="language-python">
class PortfolioProject:
    """A class representing a portfolio project."""
    
    def __init__(self, title, description, technologies, image_url=None):
        """Initialize a new portfolio project."""
        self.title = title
        self.description = description
        self.technologies = technologies
        self.image_url = image_url
        self.likes = 0
    
    def add_like(self):
        """Add a like to this project."""
        self.likes += 1
        return self.likes
    
    def get_technologies_html(self):
        """Return the technologies as an HTML string."""
        return ', '.join([f'<span class="tech">{tech}</span>' 
                         for tech in self.technologies])
    
    def __str__(self):
        """Return a string representation of this project."""
        return f"{self.title}: {self.description} ({len(self.technologies)} technologies)"


# Create some example projects
projects = [
    PortfolioProject(
        "Portfolio Website",
        "A responsive portfolio website built with Jekyll and hosted on GitHub Pages.",
        ["Jekyll", "SCSS", "JavaScript"],
        "/assets/images/project-portfolio.jpg"
    ),
    PortfolioProject(
        "Task Manager",
        "A task management application with user authentication and reminders.",
        ["Python", "Django", "PostgreSQL", "HTML/CSS"],
        "/assets/images/project-taskmanager.jpg"
    )
]

# Display project information
for project in projects:
    print(project)
    print(f"Technologies: {project.get_technologies_html()}")
    print("-" * 50)
</code></pre>
</div>

## React Component Example

<div class="code-snippet-container" id="react-component">
<pre><code class="language-jsx">
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';

/**
 * ProjectCard component that displays a portfolio project
 */
const ProjectCard = ({ project, onProjectClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Animate in when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleClick = () => {
    if (onProjectClick) {
      onProjectClick(project.id);
    }
  };
  
  return (
    <article 
      className={`project-card ${isVisible ? 'visible' : ''}`}
      onClick={handleClick}
    >
      <div className="project-image">
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} />
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-links">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
          {project.codeUrl && (
            <a 
              href={project.codeUrl}
              className="project-link"
              onClick={(e) => e.stopPropagation()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    codeUrl: PropTypes.string
  }).isRequired,
  onProjectClick: PropTypes.func
};

export default ProjectCard;
</code></pre>
</div>

## About the Code Highlighter

This interactive code snippet highlighter allows you to:

1. **View syntax-highlighted code** in various programming languages
2. **Copy code** to your clipboard with one click
3. **See explanations** for both entire code snippets and specific sections
4. **Select individual lines** for more targeted explanations
5. **Learn about syntax** and best practices through the explanations

The highlighter is implemented using vanilla JavaScript with Prism.js for syntax highlighting. The explanations are generated based on pattern recognition within the code.