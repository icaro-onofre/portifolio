import { useState } from 'react'
import Arrow  from './assets/Arrow.svg';
import PraçaRamos from './assets/PraçaRamos.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className=" grid grid-cols-12 gap-5 bg-bgblue">
	    {/* Hero section starts here */}

	    <div className='bg-darkblue w-64 h-screen right-0 col-start-1 col-end-2'>
	    	<div className='font-['>Contato</div>

	    </div>
	    <div className='col-start-4 col-end-6 w-full h-5/6 object-fill ' >
	      <img src={PraçaRamos} alt="Praça Ramos image" />
	    </div>

	    <div className=" col-start-7 col-end-12">
		    <p className="font-libre text-darkblue mt-20 text-9xl">Ícaro Onofre Silva.</p>
		    <p className="text-4xl font-garamond w-full "> -Realizar soluções - desenvolvimento responsável - gerar valor - </p>
	    </div>

	    <button className=" w-12 h-12 rounded-full bg-lightblue absolute bottom-0 right-1/2 mb-8 items-center">
	    	<img src={Arrow} alt=" Arrow SVG" className="w-9"/>
	    </button>
	    {/* Hero section ends here */}
    </div>
  )
}

export default App
