import React, { useState, FC } from "react";
import { getRandom } from "./utils/utils";
import Arrow from "./assets/Arrow.svg";
import PraçaRamos from "./assets/PraçaRamos.jpg";
import { Hero1 } from "./pages/hero1";
import { Hero2 } from "./pages/hero2";
import { Hero3 } from "./pages/hero3";

function App() {
  const [folded, setFolded] = useState(false);

  function handleSetFolded() {
    return setFolded(!folded);
  }

  let selected = getRandom(0, 2);

  function renderRandom(selected: number) {
    switch (selected) {
      case 0:
        return <Hero1 />;
      case 1:
        return <Hero2 />;
      case 2:
        return <Hero3 />;
    }
  }


  return (
    <>
      {!folded ? (
        <>{renderRandom(selected)}</>
      ) : (
        <div>
          <div className="bg-darkblue w-64 h-screen right-0 col-start-1 col-end-2">
            <div className="font-[Inconsolata]">Contato</div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
