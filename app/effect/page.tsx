"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

function AnimatedNumberReactSpring({ value }: { value: number }) {
  // 여기에 코드를 작성해주세요

  // const props = useSpring({
  //   from: { number: 0 },
  //   to: { number: value },
  //   config: { duration: 500 },

  // });

  const [props, api] = useSpring(
    () => ({
      from: { number: 0 },
    }),
    []
  );

  useEffect(() => {
    api.start({ number: value });
  }, [api, value]);

  return (
    <animated.span>
      {props.number.to((n: number) => n.toFixed(0))}
    </animated.span>
  );
}

function App() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = (Math.random() * 100).toFixed();
      setNum(parseInt(newNum));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col w-screen h-screen gap-2 items-center justify-center'>
      <span>{num}</span>
      <AnimatedNumberReactSpring value={num} />
    </div>
  );
}

export default App;