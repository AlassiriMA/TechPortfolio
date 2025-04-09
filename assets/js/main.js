// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize header scroll effect
  initHeaderScroll();
  
  // Initialize typing animation
  initTypingAnimation();
  
  // Initialize screenshots lightbox
  initLightbox();
});

// Mobile menu functionality
function initMobileMenu() {
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (!toggleButton || !mobileMenu) return;
  
  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleButton.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Typing animation
function initTypingAnimation() {
  const typingElement = document.querySelector('.typing-animation');
  
  if (!typingElement) return;
  
  const texts = JSON.parse(typingElement.getAttribute('data-texts') || '[]');
  if (texts.length === 0) return;
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;
  let pauseDuration = 1500;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Deleting text
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 30;
    } else {
      // Typing text
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 70;
    }
    
    // If finished typing
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = pauseDuration;
    }
    
    // If finished deleting
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
    
    setTimeout(type, typingSpeed);
  }
  
  // Start typing
  setTimeout(type, 1000);
}

// Lightbox for project screenshots
function initLightbox() {
  const screenshots = document.querySelectorAll('.screenshot-item');
  
  if (screenshots.length === 0) return;
  
  // Create lightbox elements if they don't exist
  if (!document.querySelector('.lightbox')) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    const lightboxImg = document.createElement('img');
    const lightboxCaption = document.createElement('div');
    lightboxCaption.className = 'lightbox-caption';
    
    const lightboxClose = document.createElement('div');
    lightboxClose.className = 'lightbox-close';
    lightboxClose.innerHTML = '&times;';
    
    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(lightboxCaption);
    lightbox.appendChild(lightboxClose);
    
    document.body.appendChild(lightbox);
    
    // Close lightbox when clicking on close button or outside the image
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
  
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  
  // Open lightbox when clicking on a screenshot
  screenshots.forEach(screenshot => {
    screenshot.addEventListener('click', () => {
      const img = screenshot.querySelector('img');
      const caption = screenshot.querySelector('figcaption');
      
      lightboxImg.src = img.src;
      lightboxCaption.textContent = caption ? caption.textContent : '';
      lightbox.classList.add('active');
    });
  });
}

// Skills animation (optional)
function initSkillsAnimation() {
  const skillsRows = document.querySelectorAll('.skills-row');
  
  skillsRows.forEach((row, index) => {
    // Clone the skills to create an infinite loop
    const skills = row.querySelectorAll('.tech-icon');
    skills.forEach(skill => {
      const clone = skill.cloneNode(true);
      row.appendChild(clone);
    });
    
    // Alternate direction for each row
    if (index % 2 !== 0) {
      row.style.animation = 'scroll-reverse 20s linear infinite';
    }
  });
}

// Static Color Palette Generator
class ColorPaletteGenerator {
  constructor() {
    this.predefinedPalettes = {
      "professional": {
        "colors": [
          {"name": "Primary Blue", "hex": "#1a5f7a", "description": "Deep professional blue"},
          {"name": "Gold Accent", "hex": "#d4af37", "description": "Warm gold accent"},
          {"name": "Charcoal", "hex": "#333333", "description": "Dark charcoal for text"},
          {"name": "Light Gray", "hex": "#f5f5f5", "description": "Light background shade"},
          {"name": "Neutral Gray", "hex": "#a0a0a0", "description": "Balanced neutral tone"}
        ]
      },
      "creative": {
        "colors": [
          {"name": "Vibrant Purple", "hex": "#8a4fff", "description": "Creative purple"},
          {"name": "Coral Pink", "hex": "#ff6b6b", "description": "Energetic coral"},
          {"name": "Teal", "hex": "#4ecdc4", "description": "Fresh teal blue"},
          {"name": "Sunny Yellow", "hex": "#ffe66d", "description": "Bright optimistic yellow"},
          {"name": "Deep Indigo", "hex": "#292f36", "description": "Grounding dark tone"}
        ]
      },
      "minimal": {
        "colors": [
          {"name": "Pure Black", "hex": "#000000", "description": "True black"},
          {"name": "Pure White", "hex": "#ffffff", "description": "Clean white"},
          {"name": "Light Gray", "hex": "#e0e0e0", "description": "Subtle light gray"},
          {"name": "Medium Gray", "hex": "#a0a0a0", "description": "Balanced mid-tone"},
          {"name": "Dark Gray", "hex": "#505050", "description": "Deep charcoal gray"}
        ]
      },
      "tech": {
        "colors": [
          {"name": "Tech Blue", "hex": "#0984e3", "description": "Digital blue"},
          {"name": "Electric Green", "hex": "#00b894", "description": "Vibrant green"},
          {"name": "Deep Navy", "hex": "#2d3436", "description": "Dark background"},
          {"name": "Silver Gray", "hex": "#dfe6e9", "description": "Light interface shade"},
          {"name": "Accent Red", "hex": "#ff7675", "description": "Attention-grabbing highlight"}
        ]
      },
      "elegant": {
        "colors": [
          {"name": "Royal Purple", "hex": "#6c5ce7", "description": "Luxurious purple"},
          {"name": "Gold", "hex": "#d4af37", "description": "Classic gold"},
          {"name": "Deep Charcoal", "hex": "#2d3436", "description": "Rich dark tone"},
          {"name": "Cream", "hex": "#ffeaa7", "description": "Soft warm neutral"},
          {"name": "Burgundy", "hex": "#b71540", "description": "Deep elegant red"}
        ]
      }
    };
  }
  
  setup() {
    return Promise.resolve(true);
  }
  
  generatePalette(paletteType) {
    // Use the selected palette type directly
    const paletteKey = this.predefinedPalettes[paletteType] ? paletteType : "professional";
    
    return Promise.resolve(this.predefinedPalettes[paletteKey]);
  }
  
  applyPalette(palette, previewMode = true) {
    // Get primary color from the palette
    const primary = palette.colors.find(color => color.name.toLowerCase().includes('primary')) || palette.colors[0];
    
    // Apply to CSS variables (in preview mode or permanent)
    const root = document.documentElement;
    
    if (previewMode) {
      // Store original colors for reverting later
      if (!this.originalColors) {
        this.originalColors = {
          primary: getComputedStyle(root).getPropertyValue('--primary-color')
        };
      }
      
      // Apply new colors
      root.style.setProperty('--primary-color', primary.hex);
      
      // Return a function to revert the changes
      return () => {
        root.style.setProperty('--primary-color', this.originalColors.primary);
      };
    } else {
      // For static sites, we'd only support temporary previews
      console.log('Permanent changes are not supported in the static version');
    }
  }
}

// Initialize the color palette generator
const colorPaletteGenerator = new ColorPaletteGenerator();

// Example usage (to be called when setting up the color palette generator UI)
function initColorPaletteGenerator() {
  colorPaletteGenerator.setup()
    .then(() => {
      console.log('Static color palette generator is ready');
      // Here you would initialize the UI elements for the generator
    })
    .catch(error => {
      console.error('Failed to initialize color palette generator:', error);
    });
}