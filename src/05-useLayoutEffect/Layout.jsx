import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";


export const Layout = () => {
    const { increment, counter, decrement } = useCounter();

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter);

   const {name, id, sprites} = data;

    const handleSig = () => {
        increment();
        //console.log(data);
    }
    const handleAnt = () => {
        decrement();
    }

  return (
    <>
        <h1>Pokemon</h1>
        <hr/>
        {
            sprites 
            ?   <img src={sprites.front_default}/>
            :   <img src={sprites}/>
        }
        {
            isLoading 
            ?   <LoadingQuote/>
            :   <Quote name={name} id={id}/>
        }
        
        
        <button onClick={handleAnt} className="btn btn-primary" disabled={counter<2}>Anterior</button>
        <button onClick={handleSig} className="btn btn-primary">Siguiente</button>
        
        
    </>
    
  )
}