import { useReducer } from "react"
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

export const TodoApp = () => {
    const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del sal',
        done: false,
    },
    {
        id: new Date().getTime() + 100,
        description: 'Recolectar la materia oscura',
        done: false,
    }
]
    const [todos, dispatch] = useReducer(todoReducer ,initialState);

    const handleNewTodo = (todo) => {
        console.log({todo});

    }
  return (
    <>
        <h1>TodoApp 10 <small>pendientes 2</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                <TodoList todos={todos}/>
                 {/* TodoList */}
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd */}
                <TodoAdd onNewTodo={handleNewTodo}/>
                {/* TodoAdd */}
            </div>
        </div>
        
        
    </>
  )
}
