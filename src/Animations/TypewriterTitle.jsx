import { useState, useEffect } from "react";

export default function TypewriterTitle({ text, speed = 300 }) {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [cursor, setCursor] = useState(" ");

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (index < text.length + 10) {
      const timeoutId = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (index < text.length * 2 + 10) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText("");
        setIndex(0);
      }, speed + 600);
      return () => clearTimeout(timeoutId);
    }
  }, [index, text, speed]);

  useEffect(() => {
    let speed = index > text.length - 1 ? 600 : 300;

    let timeoutId;
    if (cursor === "_") {
      timeoutId = setTimeout(() => {
        setCursor(" ");
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      timeoutId = setTimeout(() => {
        setCursor("_");
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [cursor]);

  return (
    <h1 className="typewriter">
      {currentText}
      {cursor}
    </h1>
  );
}
