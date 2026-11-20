"use client";

import { useEffect, useRef, useState } from "react";
import typewriterStyles from "@/styles/typewriter.module.css";
import { TypewriterProps } from "@/types/props/common.props.types";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";

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
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // With reduced motion the first word is shown statically instead.
    if (prefersReducedMotion) return;

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
    prefersReducedMotion,
  ]);

  return (
    <div>
      {/* Screen readers get the full list once, not letter-by-letter. */}
      <span className="sr-only">{words.join(", ")}</span>

      <span aria-hidden="true" className={`${className} text-nowrap`}>
        {prefersReducedMotion ? words[0] : text}
        <span
          className={`inline-block ml-1 w-1 origin-center ${typewriterStyles.cursor}`}
        ></span>
      </span>
    </div>
  );
};

export default Typewriter;
