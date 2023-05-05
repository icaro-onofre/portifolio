import React, { useState } from "react";
import { motion as m, useDragControls } from "framer-motion";

export function Hero3() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className=" grid grid-cols-12 gap-5 bg-bgblue">
        {/* Hero section starts here */}
        <div className="bg-lightblue h-screen right-0 w-28"></div>

        <div className="col-start-3 col-end-4 mt-52">
          <div className="flex flex-row ">
            <p className="font-libre text-darkblue text-4xl">Bafuffu</p>
            <div className="w-1 h-28 bg-darkblue"></div>
            <p className="font-roboto font-bold text-darkblue text-4xl">
              fullstack, frontend, backend
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
}
