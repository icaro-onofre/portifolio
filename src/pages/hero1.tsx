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
        <div className=" bg-lightblue h-screen right-0 w-44  ">
          <p className=" m-auto content-center font-libre font-bold text-1xl text-bgblue w-32  text-left mt-4 ">
            Soluções de webdesign integradas a inteligência de dados e alta
            personalização.
          </p>
          <div className="mt-40 rotate-90 mr-16">
            <p className="mb-2 text-2xl text-blue font-inconsolata font-black">Desenvolvedor. </p>
            <div className="flex items-center self-start font-inconsolata font-bold bg-blue h-12 w-44">
              <p className="text-2xl text-bgblue ml-3 font-black">Fullstack.</p>
            </div>
          </div>
        </div>

        <div className="col-start-3 col-end-4">
          <div className="flex flex-row absolute bottom-10 mt-56 items-center ">
            <p className=" font-bold font-libre text-blue text-3xl w-14 mr-16">
              Ícaro Onofre Silva.
            </p>
            <div className="w-0.5 h-32 bg-blue" />  {/*Linha azul no meio*/}
            <p className="font-roboto font-bold text-blue text-3xl w-28 m-3 ">
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
