"use client";

import { useEffect, useRef, useState } from "react";
import typewriterStyles from "@/styles/typewriter.module.css";
import { TypewriterProps } from "@/types/props/common.props.types";

const Typewriter = ({
  words,
  loop = true,
  typingSpeed = 100,
  deletingSpeed = 60,
  delayBetweenWords = 1500,
  className = "",
}: TypewriterProps) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[currentWordIndex % words.length];

    const updateText = () => {
      setText((prev) => {
        const updatedText = isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1);
        return updatedText;
      });

      const isWordComplete = !isDeleting && text === currentWord;
      const isWordDeleted = isDeleting && text === "";

      if (isWordComplete) {
        timeoutRef.current = setTimeout(
          () => setIsDeleting(true),
          delayBetweenWords,
        );
      } else if (isWordDeleted) {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) =>
          loop ? (prevIndex + 1) % words.length : prevIndex + 1,
        );
      } else {
        timeoutRef.current = setTimeout(
          updateText,
          isDeleting ? deletingSpeed : typingSpeed,
        );
      }
    };

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      updateText,
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    text,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    delayBetweenWords,
    loop,
  ]);

  return (
    <div>
      <span className={`${className} text-nowrap`}>
        {text}
        <span
          className={`inline-block ml-1 w-1 origin-center ${typewriterStyles.cursor}`}
        ></span>
      </span>
    </div>
  );
};

export default Typewriter;
