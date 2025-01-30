"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardFooter } from "./card";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20 w-11/12 overflow-hidden h-fit", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap  h-full",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <Card
            className="w-[90vw] md:w-[450px]  relative rounded-2xl border border-b-0  border-slate-700 px-4 md:px-3 py-4  bg-textColor h-[50vh] md:h-[45vh] flex flex-col items-start justify-between"
            key={item.name}
          >
            <CardContent className=" h-10/12">
              {/* <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div> */}
              <span className="relative z-20 text-sm text-white font-railway font-normal">
                {item.quote}
              </span>
            </CardContent>
            <CardFooter>
              <div className="relative z-20 mt-4 flex flex-col">
                <span className="text-sm leading-[1.6] text-gray-100 font-normal">{item.name}</span>
                <span className="text-sm leading-[1.6] text-gray-100 font-normal">
                  {item.title}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </ul>
    </div>
  );
};
