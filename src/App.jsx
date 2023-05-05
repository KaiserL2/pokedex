import Gino from "./stampaASchermo"
import './index.css'
import {motion} from 'framer-motion'



function App() {

  

  return (

    <div>

      

      <div className="flex flex-col justify-center items-center m-12">

        <motion.h1

        initial={{
          y:-100
        }}

        transition={{
          duration:1
        }}

        animate={{
          y:0
        }}

        className="text-black text-6xl font-bold mb-8">Pokedex</motion.h1>

        <Gino />

      </div>
    </div>
    
  )
}

export default App
