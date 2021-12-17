import TodoItems from "../TodoItems/TodoItems"
import { useContext } from "react"
import { TodoContext } from '../Context/TodoContext'
import { makeRandomID } from "../TodoList/data"
const TodoCard = ({ todo }) => {
    const { todoList, setTodoList } = useContext(TodoContext)
    const handleDeleteTodoList = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    };
    const handleAddToDoItems = (id) => {
        const title = prompt("please enter the title");
        setTodoList(
            todoList.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        items: [
                            ...item.items,
                            { id: makeRandomID(), title, status: false },
                        ],
                    }
                    : item
            )
        );
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
            <TodoItems
                todo={todo}
            />
            <div>
                <button onClick={() => handleAddToDoItems(todo.id)}>
                    add item
                </button>
            </div>
        </div>
    )
}

export default TodoCard
