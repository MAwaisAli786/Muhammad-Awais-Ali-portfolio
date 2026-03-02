// src/app/components/TypewriterEffect.jsx

'use client';

import { useState, useEffect, useCallback } from 'react';

// Animation settings
const TYPING_SPEED = 100; // Har character type hone ka time (ms)
const ERASING_SPEED = 50;  // Har character erase hone ka time (ms)
const PAUSE_TIME = 1000;  // Typing ke baad rukne ka time (ms)

const TypewriterEffect = ({ words }) => {
    // words = ['Full-Stack Developer', 'UI/UX Enthusiast', 'Coding Alchemist']
    const [wordIndex, setWordIndex] = useState(0); // Kaunsa word dikhana hai
    const [charIndex, setCharIndex] = useState(0); // Word ka kaunsa character dikhana hai
    const [isDeleting, setIsDeleting] = useState(false); // Typing ho rahi hai ya erasing
    const [displayedText, setDisplayedText] = useState(''); // Screen par dikhne wala text

    const currentWord = words[wordIndex];

    const handleTyping = useCallback(() => {
        if (!currentWord) return;

        if (isDeleting) {
            // ERASING mode: Characters ko hatao
            if (charIndex > 0) {
                setDisplayedText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                // Erasing complete, ab next word par jao
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length); // Loop back
            }
        } else {
            // TYPING mode: Characters ko add karo
            if (charIndex < currentWord.length) {
                setDisplayedText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else {
                // Typing complete, ab ruk kar erasing start karo
                setIsDeleting(true);
            }
        }
    }, [charIndex, currentWord, isDeleting, words.length]);


    useEffect(() => {
        let timer;
        let speed = isDeleting ? ERASING_SPEED : TYPING_SPEED;

        // Agar typing/erasing khatam ho gayi hai toh PAUSE_TIME lagao
        if (!isDeleting && charIndex === currentWord.length) {
            speed = PAUSE_TIME;
        } else if (isDeleting && charIndex === 0) {
            speed = PAUSE_TIME / 2; // Erasing ke baad thoda kam time rukna
        }

        timer = setTimeout(handleTyping, speed);

        return () => clearTimeout(timer); // Cleanup function for safety
    }, [charIndex, isDeleting, currentWord, handleTyping]);

    return (
        <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 animate-glow">
            {displayedText}
            {/* Blinking Cursor */}
            <span className="inline-block w-0.5 h-full ml-1 bg-pink-400 animate-blink"></span>
        </span>
    );
};

export default TypewriterEffect;