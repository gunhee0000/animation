'use client';

// import { animated,useScroll, useSpring } from "@react-spring/web";
// import { useEffect, useState } from "react";

// export default function MotionScroll() {
//     const { scrollYProgress } = useScroll();
//     const [ren, setRen] = useState(false);
    
//       useEffect(() => {
//         setRen(true);
//       }, []);

//     const textStyle = useSpring({
//         y: scrollYProgress.to([0.9, 1], [100, 0]),
//         opacity: scrollYProgress.to([0.7, 1], [0, 100]),
//     });

//     if(!ren) return null;
    
//     return(
//         <div className="w-screen h-[2000px] flex justify-center items-center">
//             <animated.div
//                 className="fixed top-0 left-0 w-full h-full bg-orange-400"
//                 style={{
//                     clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
//                 }}>
//                 <h1 className="text-blue-700 text-5xl pl-8 pt-8 font-bold">
//                     <span>
//                         <animated.span className="block" style={textStyle}>Aha!</animated.span>
//                     </span>
//                     <span>
//                         <animated.span className="block" style={textStyle}>You found me!</animated.span>
//                     </span>
//                 </h1>
//             </animated.div>
//         </div>
//     );
// }

import { motion, useTransform, useScroll } from "framer-motion";

export default function MotionScroll() {
    const {scrollYProgress} = useScroll();

    const scale = useTransform(scrollYProgress, [0, 1], [0, 3]);
    const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
    const y = useTransform(scrollYProgress, [0.7, 1], [100, 0]);

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
            <div className="fixed top-0 left-0 flex flex-col pt-8 pl-8 text-5xl font-bold text-blue-700">
                <motion.span style={{opacity, y}}>Aha!</motion.span>
                <motion.span style={{opacity, y}}>You found me!</motion.span>
            </div>
        </div>
    )
}