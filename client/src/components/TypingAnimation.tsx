import { useEffect, useState } from "react";

/**
 * Props interface for the TypingAnimation component
 * 
 * @interface TypingAnimationProps
 * @property {string[]} texts - Array of text strings to display in sequence with the typing effect
 * @property {string} [className] - Optional CSS class name to apply custom styling to the typing text
 * @property {number} [typingSpeed=70] - Speed of typing in milliseconds between each character appearance
 * @property {number} [pauseDuration=1500] - Duration in milliseconds to pause after completing a text before deleting
 */
interface TypingAnimationProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

/**
 * A component that creates a typewriter-style text animation effect
 * 
 * This component simulates a typing effect by progressively revealing characters
 * of the provided text strings. It cycles through the array of texts, typing each
 * one out character by character, pausing when complete, then deleting it before
 * moving to the next text string.
 * 
 * The animation follows this sequence:
 * 1. Type the current text character by character
 * 2. Pause with a blinking cursor when text is fully displayed
 * 3. Delete the text character by character
 * 4. Move to the next text in the array and repeat
 * 
 * @component
 * @param {TypingAnimationProps} props - Component properties
 * @param {string[]} props.texts - Array of text strings to display in sequence
 * @param {string} [props.className=""] - Optional CSS class for styling the text
 * @param {number} [props.typingSpeed=70] - Time in milliseconds between typing each character
 * @param {number} [props.pauseDuration=1500] - Time in milliseconds to pause after showing complete text
 * @returns {JSX.Element} The animated typing text component
 * 
 * @example
 * <TypingAnimation
 *   texts={["Frontend Developer", "UX Designer", "Problem Solver"]}
 *   className="text-2xl text-glossy-gold"
 *   typingSpeed={50}
 *   pauseDuration={2000}
 * />
 */
const TypingAnimation = ({ 
  texts, 
  className = "", 
  typingSpeed = 70,
  pauseDuration = 1500
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
        className={`typing-text font-bold ${className}`}
        style={{
          borderRightColor: isTypingComplete ? '#DAA520' : 'transparent',
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
