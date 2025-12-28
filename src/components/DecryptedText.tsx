'use client';

import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface DecryptedTextProps {
  texts: string[];
  interval?: number;
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ가나다라마바사아자차카타파하';

export default function DecryptedText({ texts, interval = 3000 }: DecryptedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let iterations = 0;
    const targetText = texts[currentIndex];
    const maxIterations = targetText.length;

    const intervalId = setInterval(() => {
      setDisplayText(
        targetText
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return targetText[index];
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join('')
      );

      if (iterations >= maxIterations) {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, interval);
      }

      iterations += 1 / 3;
    }, 30);

    return () => clearInterval(intervalId);
  }, [currentIndex, texts, interval]);

  return (
    <Typography variant="h1" sx={{ color: 'common.white', fontFamily: 'monospace' }}>
      {displayText}
    </Typography>
  );
}
