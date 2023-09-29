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
      {renderRandom(selected)}
      <div className="grid grid-cols-12 bg-bgblue">
        <div className=" bg-darkblue w-44 h-screen right-0 col-start-1 col-end-2">
          <h1 className="font-inconsolata font-black text-center text-3xl text-bgblue ">
            Projetos
          </h1>
          <h2 className=" font-inconsolata font-black text-center text-2xl text-bgblue mt-7">
            Amazônia
          </h2>
          <p className=" font-inconsolata font-bold text-center text-sm text-bgblue mt-7 w-32 ">
            “Projeto de análise de dados produzida com python, o projeto tem
            ênfase em demonstrar a importância de data storetelling e
            conscientização”
          </p>
        </div>
        <section className="col-start-4 col-end-10 text-center mt-12">
          <h1 className="font-inconsolata font-black  text-5xl text-darkblue">
            Valor científico
          </h1>
        </section>
      </div>
    </>
  );
}

export default App;
