import * as React from "react";
import { cn } from "@/lib/utils";

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
  onWordChange,
  onMorphStart,
}) {
  const text1Ref = React.useRef(null);
  const text2Ref = React.useRef(null);
  const sizerRef = React.useRef(null);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animId;

    // Set initial content: text2 is the first visible word, sizer matches it
    const firstWord = texts[(textIndex + 1) % texts.length];
    if (text1Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text1Ref.current.style.opacity = "0";
      text1Ref.current.style.filter = "";
    }
    if (text2Ref.current) {
      text2Ref.current.textContent = firstWord;
      text2Ref.current.style.opacity = "1";
      text2Ref.current.style.filter = "";
    }
    if (sizerRef.current) {
      sizerRef.current.textContent = firstWord;
    }

    const setMorph = (fraction) => {
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4)}`;
      fraction = 1 - fraction;
      text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4)}`;
    };

    const doCooldown = () => {
      morph = 0;
      if (!text1Ref.current || !text2Ref.current) return;
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "1";
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0";
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
        setMorph(fraction);
        // Word is fully formed — update sizer so container resizes to new word's width
        if (sizerRef.current && text2Ref.current) {
          const newWord = text2Ref.current.textContent;
          sizerRef.current.textContent = newWord;
          onWordChange?.(newWord);
        }
        return;
      }
      setMorph(fraction);
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          const nextWord = texts[(textIndex + 1) % texts.length];
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = nextWord;
          }
          onMorphStart?.(nextWord);
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(animId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative inline-block", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="relative inline-block"
        style={{ filter: "url(#threshold)", transition: "width 0.15s ease" }}
      >
        {/*
          Sizer: visibility:hidden keeps it out of painting but it still drives
          the container's width. Its text is only updated when a morph finishes,
          so surrounding text doesn't shift until the new word is fully formed.
        */}
        <span
          ref={sizerRef}
          className={cn("whitespace-nowrap select-none", textClassName)}
          style={{ visibility: "hidden" }}
          aria-hidden="true"
        />
        <span
          ref={text1Ref}
          className={cn(
            "absolute inset-0 flex items-center justify-center whitespace-nowrap select-none",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inset-0 flex items-center justify-center whitespace-nowrap select-none",
            textClassName
          )}
        />
      </div>
    </div>
  );
}
