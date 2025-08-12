import { useEffect, useState } from "react";
import type { AnimatedTextProp } from "@/utils/types";

export default function AnimatedText({
  text,
  speed = 60,
  delay = 0,
  loopInterval = 6000,
  className = "",
  language,
}: AnimatedTextProp) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [loopTick, setLoopTick] = useState(0);

  useEffect(() => {
    if (language === "hindi") return;

    const loop = setInterval(() => {
      setLoopTick((tick) => tick + 1);
    }, loopInterval);
    return () => clearInterval(loop);
  }, [loopInterval, language]);

  useEffect(() => {
    if (language === "hindi") return;

    let letterInterval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    setVisibleCount(0);

    // eslint-disable-next-line prefer-const
    timeout = setTimeout(() => {
      let index = 0;
      letterInterval = setInterval(() => {
        index++;
        setVisibleCount(index);
        if (index >= text.length) {
          clearInterval(letterInterval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(letterInterval);
    };
  }, [loopTick, text, speed, delay, language]);

  if (language === "hindi") {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className="whitespace-pre-wrap font-black inline-block">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block transform transition-transform duration-300 ease-out ${
            i < visibleCount
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          } ${className}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
