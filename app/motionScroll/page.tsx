'use client';

import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function MotionScroll() {
    const {scrollYProgress} = useScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [0, 3]);
    // const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    // const y = useTransform(scrollYProgress, [0.7, 1], [100, 0]);

    const textApi = useAnimation();

    useEffect(() => {
        const api = scrollYProgress.on("change", (latest) => {
          if (latest > 0.7) {
            textApi.start({
              y: "0%",
              opacity: 1,
              transition: { duration: 0.1 },
            });
          } else {
            textApi.start({
              y: "100%",
              opacity: 0,
              transition: { duration: 0.1 },
            });
          }
        });
    
        return () => api();
      }, [scrollYProgress, textApi]);

    return(
        <div className="w-screen h-[2000px] flex justify-center items-center">
            <motion.div
                className="fixed top-1/2 left-1/2 bg-orange-600 rounded-full"
                style={{
                    width: "100vh",
                    height: "100vh",
                    translateX: "-50%",
                    translateY: "-50%",
                    scale,
                }}
            />
            <div className="fixed top-0 left-0 flex flex-col mt-8 ml-8 text-5xl font-bold text-blue-700 gap-3">
                <motion.span
                    initial={{ opacity: 0, }}
                    animate={textApi}
                >Aha!</motion.span>
                <motion.span 
                    initial={{ opacity: 0, }}
                    animate={textApi}
                >You found me!</motion.span>
            </div>
        </div>
    )
}