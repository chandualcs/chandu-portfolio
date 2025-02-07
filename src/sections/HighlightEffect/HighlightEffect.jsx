import React, { useState, useEffect } from "react";
import "./HighlightEffect.css";

const HighlightEffect = ({ text, speed = 500 }) => {
  const words = text.split(" ");
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  useEffect(() => {
    if (highlightedIndex < words.length - 1) {
      const timeout = setTimeout(() => {
        setHighlightedIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [highlightedIndex, words.length, speed]);

  return (
    <span>
      {words.map((word, index) => (
        <span
          key={index}
          className={`highlight-word ${index <= highlightedIndex ? "highlight" : ""}`}
        >
          {word}{" "}
        </span>
      ))}
    </span>
  );
};

export default HighlightEffect;
