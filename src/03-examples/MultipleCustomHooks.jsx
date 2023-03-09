import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const { increment, counter, decrement } = useCounter();

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter);

   const {name, id, sprites} = data;

    //console.log({data})

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
            isLoading 
            ? (
                <div className="alert alert-info text-center">Loading...</div>
                )
            : (
                
                <blockquote className="blockquote text-end">
                    <p className="mb-1">{name}</p>
                    <footer className="blockquote-footer">{id}</footer>
                </blockquote>
                )
        }{
            sprites 
            ?(
                <img src={sprites.front_default}/>
            )
            :(
                <img src={sprites}/>
            )
        }
        
        
        <button onClick={handleAnt} className="btn btn-primary" disabled={counter<2}>Anterior Pokemon</button>
        <button onClick={handleSig} className="btn btn-primary">Siguiente Pokemon</button>
        
        
    </>
    
  )
}
