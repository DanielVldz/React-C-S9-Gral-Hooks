import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    
    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount,pendingTodosCount } = useTodo();

  return (
    <>
        <h1>TodoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small></h1>
        <hr/>
        <div className="row">
            <div className="col-7">
                {/* TodoList */}
                <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
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
