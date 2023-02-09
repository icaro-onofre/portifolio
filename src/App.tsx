import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    < div className=" grid grid-cols-12 gap-5 bg-bgblue">

	    <div className='bg-blue w-64 h-screen right-0 col-start-1 col-end-2'>

	    </div>

	    <div className=" col-start-7 col-end-12">
		    <p className="font-libre text-blue mt-20 text-9xl">Icaro Onofre Silva</p>
		    <p className="font-libre text-4xl font-garamond w-full "> -Realizar soluções - desenvolvimento responsável-gerar valor - </p>
	    </div>

    </div>
  )
}

export default App
