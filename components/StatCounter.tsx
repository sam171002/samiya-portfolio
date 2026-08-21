"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
}

export function StatCounter({ value, suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-primary md:text-4xl">
      {isInView ? (
        <>
          <CountUp end={value} duration={2} separator="," />
          {suffix}
        </>
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}
