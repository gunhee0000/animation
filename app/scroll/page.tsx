'use client';

import { animated, useScroll, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

const Scroll: React.FC = () => {
  const [ren, setRen] = useState(false);

  //렌더링으로 작동 안하는거 방지
  useEffect(() => {
    setRen(true); //페이지 로드 후 활성화
  }, []);

  const { scrollY, scrollYProgress} = useScroll();

  const styleW = useSpring({
    width: scrollYProgress.to((s) => `${s*100}%`),
    config: {duration: 100},
  });

  if(!ren) return null; //로드 완료 전까지 리턴

  return (
    <div className="w-full h-[1500px] flex justify-center items-center">
      <div className='fixed top-0 left-0 w-full h-10 border border-gray-800'>
        <animated.div className='absolute top-0 left-0 h-full bg-red-500' style={styleW}/>
      </div>
      <div className='flex flex-col space-y-6'>
        <animated.span>{scrollY.to((v) => v.toFixed(0))}</animated.span>
        <animated.span>{scrollYProgress.to((v) => v.toFixed(2))}</animated.span>
      </div>
    </div>

  );
}

export default Scroll;
