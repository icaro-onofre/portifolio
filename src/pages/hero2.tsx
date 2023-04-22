import React, { useState } from "react";

export function Hero2() {
  return (
    <div className=" grid grid-cols-12 gap-5 bg-bgblue h-full w-full">
      {/* Hero section starts here */}

      <div className="col-start-8 col-end-9 mt-52">
        <p className="font-libre text-darkblue text-7xl">Ícaro Onofre Silva.</p>
        <div className="h-2 w-80 bg-lightblue" />
        <p className="font-roboto font-bold text-bgblue text-4xl">
          fullstack, frontend, backend
        </p>
      </div>
      <div className="bottom-0 col-start-1 col-end-13 h-80 ">
        <div className="h-full bg-black w-72 z-20 ">
          <p className="font-roboto font-bold text-bgblue text-4xl">
            fullstack, frontend, backend
          </p>
          <div className="w-full h-1/2 z-10 bg-lightblue " />
          <div className="w-full h-1/2 z-10 bg-bgblue " />
        </div>
      </div>
    </div>
  );
}
