'use client';

import { useRouter } from 'next/navigation';

export default function App() {

  const router = useRouter();

  const handleRouter = (link: string) => () => {
    router.push(`/${link}`);
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white gap-10">
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('spring')}
      >
        click
      </button>
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('effect')}
      >
        number
      </button>
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('scroll')}
      >
        scroll
      </button>
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('motion-test')}
      >
        drag
      </button>
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('motion')}
      >
        damping
      </button>
      <button
        className="w-[100px] h-10 border border-white"
        onClick={handleRouter('motionScroll')}
      >
        circle
      </button>
    </div>
  );
}
