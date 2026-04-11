"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordMode?: boolean; // If true, animates word by word instead of full block
}

export function AnimatedText({ text, className, delay = 0, wordMode = false }: AnimatedTextProps) {
  if (wordMode) {
    const words = text.split(" ");
    return (
      <motion.div className={cn("flex flex-wrap overflow-hidden", className)}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.1,
              ease: [0.33, 1, 0.68, 1], // Custom ease-out
            }}
            className="mr-2 last:mr-0 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: [0.33, 1, 0.68, 1],
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.div>
    </div>
  );
}
