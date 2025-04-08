import { useEffect, useState } from "react";

/**
 * Props for the TypingAnimation component
 */
interface TypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

/**
 * Component that displays text with a typing animation effect
 * 
 * @param texts - Array of texts to animate
 * @param className - Optional CSS class for styling
 * @param typingSpeed - Speed of typing in milliseconds
 * @param pauseDuration - Duration to pause between texts in milliseconds
 * @returns Component with animated typing effect
 */
const TypingAnimation = ({ 
  texts, 
  className = "", 
  typingSpeed = 150,
  pauseDuration = 2000
}: TypingAnimationProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const text = texts[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (currentText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(() => {}, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length - 1));
        }, typingSpeed / 2);
      }
    } else {
      if (currentText.length === text.length) {
        setIsTypingComplete(true);
        timeout = setTimeout(() => {
          setIsTypingComplete(false);
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(text.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [texts, currentText, currentIndex, isDeleting, isTypingComplete, typingSpeed, pauseDuration]);

  return (
    <div className="typing-container">
      <p 
        className={`typing-text ${className}`}
        style={{
          borderRightColor: isTypingComplete ? '#FFD700' : 'transparent',
          borderRightStyle: 'solid',
          borderRightWidth: '0.15em',
          animation: isTypingComplete 
            ? 'blink-caret 0.75s step-end infinite' 
            : 'none'
        }}
        aria-live="polite"
      >
        {currentText}
      </p>
    </div>
  );
};

export default TypingAnimation;
