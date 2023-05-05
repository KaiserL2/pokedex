import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


function Gino() {
  const [pokemons, setPokemons] = useState([]);
  const [mostra_carta, setMostra_Carta] = useState(null);
  const [mosca,setMosca] = useState(false);

  const Anul = () => {
    setMosca(!mosca);
    console.log(mosca)
  }
  
  

  

  let carta = (variabile) => (<div>{variabile}</div>);

  const Cliccazione = (index) => {
    setMostra_Carta(index);
    setMosca(!mosca)

    
  };


  


  useEffect(() => {
    const dataAllPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
        let nome = response.data.results;
        const pokemonElementi = nome.map((elemento, index) => (
          <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 2,
            }}
            animate={{
              opacity: 1,
            }}
            onClick={() => {
              Cliccazione(index);
            }}
            whileHover={{
              scale: mosca ? 1 : 1.3,
              rotate:mosca ? 0 : [0,180,-90,-90],
              borderRadius:mosca? "0%":["0%","100%","0%","25%"]
            }}
            
            className="flex flex-col items-center shadow-xl w-40 py-7 rounded-xl"
            key={index}
          >
            <img
              className="h-20 w-20"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`}
            />
            <div className="flex justify-center items-center">
              <p className="text-xl text-center text-gray-900 font-bold">{elemento.name}</p>
            </div>
            
          </motion.div>

          {mostra_carta === index && mosca && (
            <motion.div className="h-72 w-52 bg-black text-white rounded-xl fixed t top-48 left-[45%] flex flex-col " 
            initial={{y:-100,opacity:0, scale:1}}
            animate={{y:mosca ? 0:-100 , opacity: mosca ? 1 : 0, scale: mosca ? 1.5 : 1 }}
            transition={{duration:2}}
            
            >
              <div>

                <button onClick={Anul}>X</button>

              </div>
              
              {carta(index)}
            </motion.div>
          )}
          </>

        ));
        setPokemons(pokemonElementi);
      } catch (error) {
        console.log(error);
      }
    };
    dataAllPokemon();
  }, );

  return (
    <div className="grid grid-cols-4 gap-5" >
      {pokemons}
    </div>
  );
}

export default Gino;
