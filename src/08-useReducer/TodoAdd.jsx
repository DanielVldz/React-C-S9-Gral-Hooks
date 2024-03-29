import { useForm } from "../hooks/useForm";
//import PropTypes from 'prop-types'

export const TodoAdd = ({onNewTodo}) => {
    const { description, onInputChange, onResetForm } = useForm({ description: '' });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.trim().length < 1) return;
        
        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);

    }
  return (
                <form onSubmit={onFormSubmit}>
                    <input 
                        type="text" 
                        placeholder="¿Que hay que hacer?"
                        className="form-control"
                        name="description"
                        value={description}
                        onChange={onInputChange}
                    />
                    <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
                    <button onClick={onResetForm} className="btn btn-outline-secondary mt-1">Limpiar</button>
                </form>
  )
}
