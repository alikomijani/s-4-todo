import { useContext } from 'react'
import { TodoListContext } from '../Context/Context'
import { types } from '../Context/reducer'
import TodoItems from '../TodoItems/TodoItems'
const TodoCard = ({ todo }) => {
    const { dispatch } = useContext(TodoListContext)
    const handleDeleteTodoList = (id) => {
        dispatch({ type: types.deleteTodoListItem, payload: { id } })
    };
    const handleAddToDoItems = (id) => {
        const title = prompt("please enter the title");
        dispatch({ type: types.addToDoItems, payload: { TodoId: id, title } })
    };

    return (
        <div className="todo" key={todo.id}>
            <div className="todo_head">
                <h1>{todo.name}</h1>
                <button onClick={() => handleDeleteTodoList(todo.id)}>
                    delete
                </button>
            </div>
            <p>{todo.description}</p>
            <TodoItems todo={todo} />
            <div>
                <button onClick={() => handleAddToDoItems(todo.id)}>
                    add item
                </button>
            </div>
        </div>
    )
}

export default TodoCard
