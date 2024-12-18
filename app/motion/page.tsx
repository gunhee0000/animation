"use client";

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function AnimatedNumberFramerMotion({ value }: { value: number }) {
  const val = useMotionValue(0);

  const spring = useSpring(val, { damping: 7, stiffness: 100 });

  const displayValue = useTransform(spring, (latest) => Math.round(latest));
  
  useEffect(() => {
    val.set(value);
  }, [val, value]);

  return <motion.span>{displayValue}</motion.span>;
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
      <AnimatedNumberFramerMotion value={num} />
    </div>
  );
}

export default App;
