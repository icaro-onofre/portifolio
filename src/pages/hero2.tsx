import React, { useState } from "react";
import { motion as m, useScroll } from "framer-motion";
import { folded } from "../store";

export function Hero2() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className=" grid grid-cols-12 gap-5 bg-bgblue h-screen overflow-hidden">
        {/* Hero section starts here */}
        <div className="col-start-8 col-end-9 mt-52">
          <p className="font-libre text-blue text-7xl">Ícaro Onofre Silva.</p>
          <div className="h-1 w-80 bg-lightblue" />
          <p className="font-libre w-80 text-black text-1xl mt-2">
            - Realizar soluções - desenvolvimento responsável - gerar valor -
          </p>
        </div>

        <div className="absolute bottom-0 col-start-1 col-end-13 w-full">
          <div className="flex flex-row h-44">
            <div className="absolute h-full bg-black w-44">
              <p className="font-roboto font-bold text-bgblue  text-justify text-3xl">
                fullstack, frontend, backend
              </p>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-1/2 z-10 bg-lightblue " />
              <div className="w-full h-1/2 z-10 bg-bgblue " />
            </div>
            <div className="h-full bg-black w-72 flex justify-center items-center align-middle  content-center">
              

	      <p className="font-libre font-bold text-bgblue text-center align-middle text-1xl w-48 object-center">
                Soluções de webdesign integrado a inteligência de dados e alta
                personalização.
              </p>
	      
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
