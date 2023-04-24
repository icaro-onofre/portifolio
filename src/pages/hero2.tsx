import React, { useState } from "react";

export function Hero2() {
  return (
    <div className=" grid grid-cols-12 gap-5 bg-bgblue h-screen overflow-hidden">
      {/* Hero section starts here */}
      <div className="col-start-8 col-end-9 mt-44">
        <p className="font-libre text-blue text-7xl">Ícaro Onofre Silva.</p>
        <div className="h-1 w-80 bg-lightblue" />
        <p className="font-libre w-80 text-black text-1xl mt-2">- Realizar soluções - desenvolvimento responsável - gerar valor -</p>
      </div>

      <div className="absolute bottom-0 col-start-1 col-end-13 w-full">
        <div className="flex flex-row h-44">
          <div className="h-full bg-black w-72">
            <p className="font-roboto font-bold text-bgblue text-3xl">
              fullstack, frontend, backend
            </p>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-1/2 z-10 bg-lightblue " />
            <div className="w-full h-1/2 z-10 bg-bgblue " />
          </div>
          <div className="h-full bg-black w-72">
            <div className="flex justify-center items-center w-80 content-center ">
              <p className="font-libre font-bold text-bgblue text-1xl w-48">
                Soluções de webdesign integrado a inteligência de dados e alta
                personalização.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
