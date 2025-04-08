import { useState, useEffect, useCallback } from 'react';

/**
 * Options for the typing effect hook
 */
interface TypingEffectOptions {
  /**
   * Speed of typing in milliseconds
   */
  typingSpeed?: number;
  
  /**
   * Speed of deleting in milliseconds
   */
  deletingSpeed?: number;
  
  /**
   * Delay before starting to delete text in milliseconds
   */
  delayBeforeDelete?: number;
  
  /**
   * Delay before typing the next text in milliseconds
   */
  delayBeforeType?: number;
}

/**
 * Custom hook that creates a typing effect for a list of texts
 * 
 * @param texts - Array of strings to display with typing effect
 * @param options - Configuration options for the typing effect
 * @returns The current displayed text and whether typing is complete
 */
const useTypingEffect = (
  texts: string[],
  options: TypingEffectOptions = {}
) => {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBeforeDelete = 2000,
    delayBeforeType = 500
  } = options;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentFullText = texts[currentTextIndex];

  const typeNextCharacter = useCallback(() => {
    if (displayedText.length < currentFullText.length) {
      setDisplayedText(prev => prev + currentFullText.charAt(prev.length));
    } else {
      setIsTyping(false);
      setIsComplete(true);
      setIsPaused(true);
      setTimeout(() => {
        setIsPaused(false);
      }, delayBeforeDelete);
    }
  }, [currentFullText, displayedText, delayBeforeDelete]);

  const deleteLastCharacter = useCallback(() => {
    if (displayedText.length > 0) {
      setDisplayedText(prev => prev.slice(0, -1));
    } else {
      setIsTyping(true);
      setIsPaused(true);
      setTimeout(() => {
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
        setIsPaused(false);
      }, delayBeforeType);
    }
  }, [displayedText, texts.length, delayBeforeType]);

  useEffect(() => {
    if (texts.length === 0) return;
    
    let timeout: NodeJS.Timeout;
    
    if (!isPaused) {
      if (isTyping) {
        timeout = setTimeout(typeNextCharacter, typingSpeed);
      } else {
        timeout = setTimeout(deleteLastCharacter, deletingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [
    texts, 
    isPaused, 
    isTyping, 
    displayedText, 
    currentTextIndex, 
    typingSpeed, 
    deletingSpeed, 
    typeNextCharacter, 
    deleteLastCharacter
  ]);

  return { text: displayedText, isComplete };
};

export default useTypingEffect;
