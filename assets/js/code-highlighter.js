/**
 * Interactive Code Snippet Highlighter with Static Explanations
 * 
 * This script provides an interactive code snippet experience with:
 * - Syntax highlighting using Prism.js
 * - Line-by-line selection and explanation
 * - Pre-written explanations for common code patterns
 * - Interactive elements like copying and expanding
 */

class CodeHighlighter {
  constructor() {
    this.snippets = document.querySelectorAll('.code-snippet-container');
    this.explanationData = {};
    this.init();
  }

  init() {
    if (this.snippets.length === 0) return;
    
    // Initialize Prism.js if not already loaded
    if (typeof Prism === 'undefined') {
      this.loadPrismJS();
    } else {
      this.setupSnippets();
    }
    
    // Load explanation data
    this.loadExplanationData();
  }

  loadPrismJS() {
    // Load Prism CSS
    const prismCSS = document.createElement('link');
    prismCSS.rel = 'stylesheet';
    prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(prismCSS);

    // Load Prism JS
    const prismJS = document.createElement('script');
    prismJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/prism.min.js';
    prismJS.onload = () => {
      // Load additional languages
      const languages = ['javascript', 'css', 'html', 'python', 'ruby', 'bash', 'jsx', 'typescript'];
      
      const loadLanguage = (index) => {
        if (index >= languages.length) {
          this.setupSnippets();
          return;
        }
        
        const lang = languages[index];
        const script = document.createElement('script');
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/components/prism-${lang}.min.js`;
        script.onload = () => loadLanguage(index + 1);
        document.body.appendChild(script);
      };
      
      loadLanguage(0);
    };
    document.body.appendChild(prismJS);
  }

  setupSnippets() {
    this.snippets.forEach((container, index) => {
      // Set up the container with controls
      const preElement = container.querySelector('pre');
      const codeElement = preElement.querySelector('code');
      
      // Create toolbar
      const toolbar = document.createElement('div');
      toolbar.className = 'code-snippet-toolbar';
      
      // Add language indicator if available
      const languageClass = Array.from(codeElement.classList)
        .find(cls => cls.startsWith('language-'));
      
      if (languageClass) {
        const language = languageClass.replace('language-', '');
        const langIndicator = document.createElement('span');
        langIndicator.className = 'code-language';
        langIndicator.textContent = language;
        toolbar.appendChild(langIndicator);
      }
      
      // Add copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'code-copy-btn';
      copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy';
      copyBtn.addEventListener('click', () => this.copyCode(codeElement, copyBtn));
      toolbar.appendChild(copyBtn);
      
      // Add explain button
      const explainBtn = document.createElement('button');
      explainBtn.className = 'code-explain-btn';
      explainBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show Explanation';
      explainBtn.dataset.snippetId = index;
      explainBtn.addEventListener('click', () => this.toggleExplanation(container, index));
      toolbar.appendChild(explainBtn);
      
      // Insert toolbar before the pre element
      container.insertBefore(toolbar, preElement);
      
      // Add explanation container
      const explanationContainer = document.createElement('div');
      explanationContainer.className = 'code-explanation';
      explanationContainer.style.display = 'none';
      
      // If there's an explanation in the data-explanation attribute, use it
      const explanationContent = container.dataset.explanation || this.getExplanationFromId(container.id);
      
      if (explanationContent) {
        explanationContainer.innerHTML = explanationContent;
      } else {
        // If no explanation is provided, create a generic one based on the language
        const language = languageClass ? languageClass.replace('language-', '') : 'code';
        const genericExplanation = this.createGenericExplanation(language, codeElement.textContent);
        explanationContainer.innerHTML = genericExplanation;
      }
      
      container.appendChild(explanationContainer);
      
      // Make snippets interactive
      this.makeSnippetInteractive(container, codeElement);
    });
    
    // If Prism is loaded, trigger highlighting
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

  makeSnippetInteractive(container, codeElement) {
    // Add line numbers
    const codeLines = codeElement.textContent.split('\n');
    const lineNumbersContainer = document.createElement('div');
    lineNumbersContainer.className = 'line-numbers';
    
    codeLines.forEach((_, i) => {
      const lineNumber = document.createElement('div');
      lineNumber.className = 'line-number';
      lineNumber.textContent = i + 1;
      lineNumbersContainer.appendChild(lineNumber);
    });
    
    // Find the pre element and insert line numbers before code
    const preElement = container.querySelector('pre');
    preElement.insertBefore(lineNumbersContainer, codeElement);
    
    // Make code lines selectable for specific explanations
    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-content';
    
    const codeHTML = codeElement.innerHTML;
    codeElement.innerHTML = ''; // Clear the code element
    
    codeContainer.innerHTML = codeHTML;
    codeElement.appendChild(codeContainer);
    
    // Add highlighting for line selection
    const lines = codeContainer.innerHTML.split('\n');
    codeContainer.innerHTML = lines.map((line, index) => 
      `<div class="code-line" data-line="${index+1}">${line}</div>`
    ).join('');
    
    // Add click event for line selection
    const codeLines2 = codeContainer.querySelectorAll('.code-line');
    codeLines2.forEach(line => {
      line.addEventListener('click', () => {
        // Toggle selection
        line.classList.toggle('selected-line');
        
        // If there are selected lines, show the "Explain Selection" button
        const selectedLines = container.querySelectorAll('.selected-line');
        const explanationControls = container.querySelector('.explanation-controls');
        
        if (!explanationControls && selectedLines.length > 0) {
          this.createExplanationControls(container);
        } else if (explanationControls && selectedLines.length === 0) {
          explanationControls.remove();
        }
      });
    });
  }

  createExplanationControls(container) {
    const controls = document.createElement('div');
    controls.className = 'explanation-controls';
    
    const explainSelectionBtn = document.createElement('button');
    explainSelectionBtn.className = 'explain-selection-btn';
    explainSelectionBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Explain Selection';
    explainSelectionBtn.addEventListener('click', () => this.explainSelectedLines(container));
    
    const cancelSelectionBtn = document.createElement('button');
    cancelSelectionBtn.className = 'cancel-selection-btn';
    cancelSelectionBtn.innerHTML = '<i class="fa fa-times"></i> Cancel';
    cancelSelectionBtn.addEventListener('click', () => {
      // Clear all selections
      container.querySelectorAll('.selected-line').forEach(line => {
        line.classList.remove('selected-line');
      });
      controls.remove();
    });
    
    controls.appendChild(explainSelectionBtn);
    controls.appendChild(cancelSelectionBtn);
    
    // Find the pre element and insert controls after it
    const preElement = container.querySelector('pre');
    preElement.insertAdjacentElement('afterend', controls);
  }

  copyCode(codeElement, copyBtn) {
    const code = codeElement.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
      // Change button text temporarily
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '<i class="fa fa-check"></i> Copied!';
      
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code:', err);
      copyBtn.innerHTML = '<i class="fa fa-times"></i> Failed';
      
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa fa-copy"></i> Copy';
      }, 2000);
    });
  }

  toggleExplanation(container, snippetId) {
    const explanationContainer = container.querySelector('.code-explanation');
    const explainBtn = container.querySelector('.code-explain-btn');
    
    if (explanationContainer.style.display === 'none') {
      explanationContainer.style.display = 'block';
      explainBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Hide Explanation';
    } else {
      explanationContainer.style.display = 'none';
      explainBtn.innerHTML = '<i class="fa fa-lightbulb"></i> Show Explanation';
    }
  }

  explainSelectedLines(container) {
    // Get selected lines
    const selectedLines = container.querySelectorAll('.selected-line');
    if (selectedLines.length === 0) return;
    
    // Extract line numbers and code
    const selectedLineData = Array.from(selectedLines).map(line => {
      return {
        lineNumber: parseInt(line.dataset.line),
        code: line.textContent
      };
    });
    
    // Sort by line number
    selectedLineData.sort((a, b) => a.lineNumber - b.lineNumber);
    
    // Extract the selected code
    const selectedCode = selectedLineData.map(line => line.code).join('\n');
    
    // Get the code language
    const codeElement = container.querySelector('code');
    const languageClass = Array.from(codeElement.classList)
      .find(cls => cls.startsWith('language-'));
    const language = languageClass ? languageClass.replace('language-', '') : 'unknown';
    
    // Show or create explanation container
    let explanationContainer = container.querySelector('.code-explanation');
    if (!explanationContainer) {
      explanationContainer = document.createElement('div');
      explanationContainer.className = 'code-explanation';
      container.appendChild(explanationContainer);
    }
    
    // Generate static explanation
    const lineRangeText = selectedLineData.length === 1 
      ? `line ${selectedLineData[0].lineNumber}` 
      : `lines ${selectedLineData[0].lineNumber}-${selectedLineData[selectedLineData.length-1].lineNumber}`;
    
    const explanation = this.getStaticExplanation(selectedCode, language, lineRangeText);
    
    // Update the explanation container
    explanationContainer.innerHTML = `
      <h4>Explanation for Selected Code (${lineRangeText}):</h4>
      ${explanation}
      <div class="close-explanation">
        <button class="close-btn"><i class="fa fa-times"></i> Close</button>
      </div>
    `;
    
    explanationContainer.style.display = 'block';
    
    // Add close button functionality
    const closeBtn = explanationContainer.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      explanationContainer.style.display = 'none';
      
      // Clear selections
      container.querySelectorAll('.selected-line').forEach(line => {
        line.classList.remove('selected-line');
      });
      
      // Remove controls
      const controls = container.querySelector('.explanation-controls');
      if (controls) controls.remove();
    });
  }

  loadExplanationData() {
    // This would normally load from a JSON file, but for simplicity
    // we'll define some basic explanations inline
    this.explanationData = {
      javascript: {
        'function': {
          pattern: /function\s+(\w+)\s*\(/i,
          explanation: '<p>This is a function declaration. Functions are reusable blocks of code that perform specific tasks.</p><p>Functions help organize code into logical units, promote reusability, and make maintenance easier.</p>'
        },
        'const': {
          pattern: /const\s+(\w+)\s*=/i,
          explanation: '<p>This declares a constant variable using <code>const</code>. Constants cannot be reassigned after initialization.</p><p>Using <code>const</code> helps prevent accidental reassignment and makes your code more predictable.</p>'
        },
        'let': {
          pattern: /let\s+(\w+)\s*=/i,
          explanation: '<p>This declares a block-scoped variable using <code>let</code>. Unlike variables declared with <code>var</code>, <code>let</code> variables are only accessible within the block they are defined.</p>'
        },
        'arrow': {
          pattern: /\s*=>\s*/i,
          explanation: '<p>This is an arrow function, a concise way to write functions in JavaScript (ES6+).</p><p>Arrow functions have a more compact syntax and don\'t have their own <code>this</code> binding.</p>'
        },
        'class': {
          pattern: /class\s+(\w+)/i,
          explanation: '<p>This is a class declaration. Classes are templates for creating objects with predefined properties and methods.</p><p>Classes provide a way to organize and structure code using object-oriented programming principles.</p>'
        }
      },
      css: {
        'selector': {
          pattern: /(\S+)\s*\{/i,
          explanation: '<p>This is a CSS selector that targets specific HTML elements to apply styling rules.</p>'
        },
        'property': {
          pattern: /(\S+):\s*(\S+);/i,
          explanation: '<p>This is a CSS property-value pair that defines a specific style aspect for the selected elements.</p>'
        },
        'media': {
          pattern: /@media/i,
          explanation: '<p>This is a media query, which allows applying different styles based on device characteristics like screen width, height, or resolution.</p><p>Media queries are essential for responsive design.</p>'
        }
      },
      html: {
        'tag': {
          pattern: /<(\w+)[\s>]/i,
          explanation: '<p>This is an HTML tag that defines an element on the webpage.</p>'
        },
        'attribute': {
          pattern: /(\w+)="([^"]*)"/i,
          explanation: '<p>This is an HTML attribute that provides additional information or behavior for the element.</p>'
        }
      },
      python: {
        'def': {
          pattern: /def\s+(\w+)\s*\(/i,
          explanation: '<p>This is a function definition in Python. Functions allow you to encapsulate code for reuse.</p>'
        },
        'class': {
          pattern: /class\s+(\w+)/i,
          explanation: '<p>This is a class definition in Python. Classes are blueprints for creating objects with shared properties and methods.</p>'
        },
        'import': {
          pattern: /import\s+(\w+)/i,
          explanation: '<p>This is an import statement that brings in functionality from external modules or packages.</p>'
        }
      }
    };
  }

  getExplanationFromId(id) {
    // Check if we have a predefined explanation for this snippet ID
    if (!id) return null;
    
    // Get explanations from the Jekyll site.data.code_explanations object
    // which was loaded from _data/code_explanations.yml
    const explanationData = document.getElementById('code-explanation-data');
    
    if (explanationData) {
      try {
        const explanations = JSON.parse(explanationData.textContent);
        if (explanations[id] && explanations[id].explanation) {
          return explanations[id].explanation;
        }
      } catch (e) {
        console.error('Error parsing code explanations data:', e);
      }
    }
    
    // Fallback hardcoded explanations if data isn't available
    const explanations = {
      'portfolio-html': '<h3>Portfolio HTML Structure</h3><p>This HTML code forms the basic structure of a portfolio section. It uses semantic HTML5 elements like <code>section</code> and <code>article</code> to improve accessibility and SEO.</p><p>The classes follow the BEM (Block Element Modifier) naming convention for better CSS organization.</p>',
      
      'responsive-css': '<h3>Responsive CSS Media Queries</h3><p>This CSS implements a mobile-first approach with media queries that adjust the layout for different screen sizes.</p><p>The <code>@media</code> queries target specific breakpoints (mobile, tablet, desktop) to create a responsive design that works well on all devices.</p>',
      
      'animation-js': '<h3>JavaScript Animation Function</h3><p>This JavaScript code creates smooth animations using the requestAnimationFrame API for optimal performance.</p><p>The animation function uses easing to create a more natural and polished feel. The throttle function prevents performance issues by limiting how often the animation updates.</p>',

      'react-component': '<h3>React Component Structure</h3><p>This React component follows modern best practices with hooks, prop validation, and conditional rendering.</p><p>The component implements clean event handling and appropriate accessibility attributes.</p>',
      
      'python-class': '<h3>Python Class Structure</h3><p>This Python class demonstrates object-oriented programming with properties, methods, and proper documentation.</p><p>The implementation shows how to create and use class instances with a practical example.</p>'
    };
    
    return explanations[id] || null;
  }

  getStaticExplanation(code, language, lineRange) {
    // Try to identify patterns in the code and provide relevant explanations
    const languagePatterns = this.explanationData[language] || {};
    let explanation = '';
    
    // Check if code matches any of our predefined patterns
    for (const [key, data] of Object.entries(languagePatterns)) {
      if (data.pattern.test(code)) {
        explanation += data.explanation;
        break;
      }
    }
    
    // If no pattern was matched, provide a generic explanation
    if (!explanation) {
      explanation = this.createGenericExplanation(language, code);
    }
    
    // Add syntax breakdown
    explanation += this.createSyntaxBreakdown(code, language);
    
    return explanation;
  }

  createGenericExplanation(language, code) {
    const languageInfo = {
      javascript: {
        name: 'JavaScript',
        purpose: 'adds interactivity and dynamic behavior to web pages',
        features: 'variables, functions, objects, and event handling'
      },
      css: {
        name: 'CSS (Cascading Style Sheets)',
        purpose: 'defines the visual appearance and layout of HTML elements',
        features: 'selectors, properties, and values'
      },
      html: {
        name: 'HTML (HyperText Markup Language)',
        purpose: 'structures content on the web',
        features: 'tags, attributes, and elements'
      },
      jsx: {
        name: 'JSX (JavaScript XML)',
        purpose: 'extends JavaScript to include HTML-like syntax for React components',
        features: 'component structure, props, and embedded expressions'
      },
      typescript: {
        name: 'TypeScript',
        purpose: 'adds static typing to JavaScript for better developer experience',
        features: 'type annotations, interfaces, and generics'
      },
      python: {
        name: 'Python',
        purpose: 'a versatile language used for web development, data analysis, and more',
        features: 'clean syntax, indentation-based blocks, and extensive libraries'
      },
      ruby: {
        name: 'Ruby',
        purpose: 'a dynamic language focused on simplicity and productivity',
        features: 'elegant syntax, mixins, and blocks'
      },
      bash: {
        name: 'Bash (Bourne Again SHell)',
        purpose: 'automates tasks in Unix-like operating systems',
        features: 'commands, pipes, and shell scripting'
      }
    };
    
    const info = languageInfo[language] || {
      name: language.charAt(0).toUpperCase() + language.slice(1),
      purpose: 'implements specific functionality in your project',
      features: 'syntax and constructs specific to this language'
    };
    
    const codeLength = code.trim().split('\n').length;
    const complexity = codeLength <= 5 ? 'simple' : codeLength <= 15 ? 'moderately complex' : 'complex';
    
    return `
      <h3>${info.name} Code Explanation</h3>
      <p>This is a ${complexity} ${info.name} code snippet that ${info.purpose}.</p>
      <p>The code demonstrates the use of ${info.features}.</p>
    `;
  }

  createSyntaxBreakdown(code, language) {
    // Basic syntax explanations based on language
    const syntaxGuides = {
      javascript: {
        'const': 'Declares a constant variable that cannot be reassigned.',
        'let': 'Declares a block-scoped variable that can be reassigned.',
        'function': 'Defines a reusable block of code.',
        'return': 'Specifies the value to be returned from a function.',
        '() =>': 'Arrow function syntax for more concise function expressions.',
        'if': 'Begins a conditional statement to execute code based on a condition.',
        'for': 'Creates a loop that executes code a specific number of times.',
        'class': 'Defines a blueprint for creating objects with shared properties and methods.'
      },
      html: {
        '<div>': 'Generic container for flow content.',
        '<span>': 'Generic inline container.',
        '<p>': 'Represents a paragraph.',
        '<a>': 'Creates a hyperlink to other pages, files, or locations.',
        '<img>': 'Embeds an image into the document.',
        '<ul>': 'Represents an unordered list of items.',
        '<li>': 'Represents a list item.'
      },
      css: {
        'margin': 'Sets the margin area on all four sides of an element.',
        'padding': 'Sets the padding area on all four sides of an element.',
        'color': 'Sets the color of text.',
        'background': 'Sets all background style properties at once.',
        'display': 'Specifies the display behavior of an element.',
        'position': 'Specifies the positioning method used for an element.',
        '@media': 'Applies styles based on device characteristics.'
      }
    };
    
    const langSyntax = syntaxGuides[language] || {};
    let breakdown = '<h4>Syntax Breakdown</h4><ul>';
    let addedItems = 0;
    
    // Look for key syntactic elements in the code
    for (const [keyword, explanation] of Object.entries(langSyntax)) {
      if (code.includes(keyword)) {
        breakdown += `<li><code>${keyword}</code>: ${explanation}</li>`;
        addedItems++;
      }
      
      // Limit to 5 items for readability
      if (addedItems >= 5) break;
    }
    
    // If no syntax elements were found, provide a generic message
    if (addedItems === 0) {
      breakdown += `<li>This code follows standard ${language.toUpperCase()} syntax conventions.</li>`;
    }
    
    breakdown += '</ul>';
    
    return breakdown;
  }
}

// Initialize the code highlighter when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const codeHighlighter = new CodeHighlighter();
  
  // Make it globally accessible for debugging
  window.codeHighlighter = codeHighlighter;
});