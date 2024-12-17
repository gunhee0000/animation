"use client";

import { NextPage } from "next";
import {motion, useMotionValue, useMotionValueEvent, useTransform} from "framer-motion"

const MotionTest: NextPage = () =>{
    const xMotionValue = useMotionValue(0);
    useMotionValueEvent(xMotionValue, "change", (latestValue) => {console.log("x: ", latestValue)})

    const yMotionValue = useMotionValue(0);
    useMotionValueEvent(yMotionValue, "change", (latestValue) => {console.log("y: ", latestValue)})

    const transformValue = useTransform(
        xMotionValue,
        () => xMotionValue.get() * 0.5
    );

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <motion.div
                style={{
                    x: xMotionValue,
                    y: yMotionValue,
                    width: xMotionValue,
                    height: transformValue,
                    minHeight: "40px",
                    minWidth: "120px",
                }}
                drag
                className="px-4 py-2 rounded-md bg-blue-400"
            >
                {"motion test"}
            </motion.div>
        </div>
    );
};

export default MotionTest