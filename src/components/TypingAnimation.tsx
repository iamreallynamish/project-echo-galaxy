
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation = ({ text, className }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Pause at full text
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearInterval(interval);
  }, [currentIndex, isDeleting, displayText, text]);

  return <span className={className}>{displayText}</span>;
};

export default TypingAnimation;
