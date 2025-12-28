'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
}

export default function TextType({
  text,
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|',
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursorBlink, setShowCursorBlink] = useState(true);

  useEffect(() => {
    const currentText = text[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentCharIndex < currentText.length) {
            setDisplayText(currentText.substring(0, currentCharIndex + 1));
            setCurrentCharIndex((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (currentCharIndex > 0) {
            setDisplayText(currentText.substring(0, currentCharIndex - 1));
            setCurrentCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % text.length);
          }
        }
      },
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentIndex, isDeleting, text, typingSpeed, pauseDuration]);

  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setShowCursorBlink((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <Typography variant="h1" sx={{ color: 'common.white' }}>
      {displayText}
      {showCursor && (
        <span style={{ opacity: showCursorBlink ? 1 : 0 }}>{cursorCharacter}</span>
      )}
    </Typography>
  );
}
