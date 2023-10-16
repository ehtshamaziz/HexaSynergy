"use client";
import CountUp from "react-countup";
import { IWork } from "@/types/testimonial";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CounterProps {
  work: IWork;
  index: number;
}

const Counter = ({ work, index }: CounterProps) => {
  const [counter, setCounter] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setCounter(true);
      }, 500);
    }
  }, [inView]);

  return (
    <div
      key={`homepage-work-${index}`}
      className="flex flex-1 flex-col items-center justify-center "
    >
      <p className="text-gray-dark-mid mb-2 text-[40px] font-bold text-primary">
        {counter ? <CountUp start={0} end={work.amount} duration={2.5} /> : 0}+
      </p>
      <p ref={ref} className="text-gray-light text-base font-semibold">
        {work.name}
      </p>
    </div>
  );
};

export default Counter;
