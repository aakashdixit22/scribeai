"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({ number = 40, ...props }) => {
  const [meteorStyles, setMeteorStyles] = useState([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: Math.floor(Math.random() * 100) + "%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: Math.random() * 2 + "s",
      animationDuration: Math.floor(Math.random() * 10 + 5) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "absolute size-1 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_2px_#ffffff20]",
          )}
          style={{
            ...style,
            transform: `rotate(215deg) translateX(${Math.random() * 100}vh)`,
          }}
          {...props}
        >
          <div className="absolute top-1/2 -z-10 h-[2px] w-[100px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
        </span>
      ))}
    </div>
  );
};