import { useContext } from 'react'
import { TodoListContext } from '../Context/Context'
import { types } from '../Context/reducer'
import CheckBox from "../CheckBox/CheckBox"
const TodoItems = ({ todo }) => {
    const { dispatch } = useContext(TodoListContext)
    const handleUpdateTodoItemStatus = (todoID, itemId, e) => {
        dispatch({
            type: types.updateTodoItemStatus,
            payload: { todoID, itemId, checked: e.target.checked }
        })
    };
    const handleDeleteTodoItem = (todoId , itemId)=>{
        dispatch({
            type: types.deleteTodoItem,
            payload: { todoId, itemId }
        })
    }
    return (
        <ul>
            {todo.items.map((item) => (
                <li style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }} key={`${todo.id}-${item.id}`}>
                    <CheckBox
                        onChange={(e) =>
                            handleUpdateTodoItemStatus(todo.id, item.id, e)
                        }
                        checked={item.status}
                        id={`${todo.id}-${item.id}`}
                        label={item.title}
                    />
                    <button onClick={()=>handleDeleteTodoItem(todo.id, item.id)} >delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodoItems
