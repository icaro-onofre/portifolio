import React, { useState, FC } from "react";
import { motion as m } from "framer-motion";
import { getRandom } from "./utils/utils";
import Arrow from "./assets/Arrow.svg";
import PraçaRamos from "./assets/PraçaRamos.jpg";
import { Hero1 } from "./pages/hero1";
import { Hero2 } from "./pages/hero2";
import { Hero3 } from "./pages/hero3";

function App() {
  let selected = getRandom(0, 1);

  function renderRandom(selected: number) {
    switch (selected) {
      case 0:
        return <Hero1 />;
      case 1:
        return <Hero2 />;
    }
  }

  return (
    <>
      <>{renderRandom(selected)}</>
      <m.div
        animate={{ y: 0 }}
        initial={{ y: "100%" }}
        transition={{ delay: 0.5, duration: 0.5 }}
	className='bg-bgblue'
      >
        <div className="bg-darkblue w-56 h-screen right-0 col-start-1 col-end-2">
        </div>
      </m.div>
    </>
  );
}

