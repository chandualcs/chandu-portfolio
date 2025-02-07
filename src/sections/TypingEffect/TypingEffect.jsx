import React, { useState, useEffect } from "react";
import "./TypingEffect.css"; // Add CSS for styling

const TypingEffect = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return <span className="typing-effect">{displayText}</span>;
};

export default TypingEffect;
