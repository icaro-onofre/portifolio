import React, { useState } from "react";
import { motion as m } from "framer-motion";

export function Hero1() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className=" grid grid-cols-12 gap-5 bg-bgblue">
        {/* Hero section starts here */}
        <div className="bg-lightblue h-screen right-0 w-44">
          <p className="font-libre text-sm text-bgblue">
            Soluções de webdesign integradas a inteligência de dados e alta
            personalização.
          </p>
        </div>

        <div className="col-start-3 col-end-4">
          <div className="flex flex-row absolute bottom-10 mt-56 items-center">
            <p className=" font-bold font-libre text-blue text-4xl w-28">
              Ícaro Onofre Silva.
            </p>
            <div className="w-0.5 h-32 bg-blue ml-8" />
            <p className="font-roboto font-bold text-blue text-4xl w-28 m-3">
              fullstack, frontend, backend
            </p>
          </div>
        </div>

        <div className="col-start-9 col-end-11">
          <div className=" absolute bottom-10 mt-56 items-center">
            <p className="font-bold font-libre text-blue text-2xl w-28">
              Idiomas
            </p>

            <p className="font-libre font-bold mt-2">
              <p>-Inglês</p>
              <p>-Alemão</p>
              <p>-Português</p>
            </p>
          </div>
        </div>
      </div>
    </m.div>
  );
}
