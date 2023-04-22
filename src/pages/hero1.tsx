import React, { useState } from "react";

export function Hero1() {
  return (
    <div className=" grid grid-cols-12 gap-5 bg-bgblue">
      {/* Hero section starts here */}
      <div className="bg-lightblue h-screen right-0 w-28"></div>

      <div className="col-start-3 col-end-4 mt-52 ">
       <div className="flex flex-row absolute bottom-10 ">
          <p className=" font-libre text-darkblue text-4xl w-28">
            Ícaro Onofre Silva.
          </p>
          <div className="w-1 h-28 bg-darkblue"></div>
          <p className="font-roboto font-bold text-darkblue text-4xl w-28">
            fullstack, frontend, backend
          </p>
        </div>
      </div>
    </div>
  );
}
