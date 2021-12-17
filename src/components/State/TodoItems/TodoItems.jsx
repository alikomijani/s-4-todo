import React, { useContext } from 'react'
import CheckBox from '../CheckBox/CheckBox'
import { TodoContext } from '../Context/TodoContext';
const TodoItems = ({ todo }) => {
    const { todoList, setTodoList } = useContext(TodoContext)
    const handleUpdateTodoItemStatus = (todoID, itemId, e) => {
        setTodoList(
            todoList.map((todo) =>
                todo.id === todoID
                    ? {
                        ...todo,
                        items: todo.items.map((item) =>
                            item.id === itemId
                                ? { ...item, status: e.target.checked }
                                : item
                        ),
                    }
                    : todo
            )
        );
    };
    return (
        <ul>
            {todo.items.map((item) => (
                <li key={`${todo.id}-${item.id}`}>
                    <CheckBox
                        onChange={(e) =>
                            handleUpdateTodoItemStatus(todo.id, item.id, e)
                        }
                        checked={item.status}
                        id={`${todo.id}-${item.id}`}
                        label={item.title}
                    />

                </li>
            ))}
        </ul>
    )
}

export default TodoItems
