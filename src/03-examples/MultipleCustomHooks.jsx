import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {
    const { increment, counter } = useCounter();

    const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon/'+counter);

   const {name, id} = data;

    //console.log({data})

    const handleNext = () => {
        
        increment();
        console.log(counter);
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
        }
        <button onClick={handleNext} className="btn btn-primary">Next Pokemon</button>
        
        
    </>
    
  )
}
