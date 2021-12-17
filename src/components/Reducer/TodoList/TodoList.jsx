import { useReducer } from "react";
import data from "./data";
import './TodoList.style.css'
import reducer, { types } from "./reducer";
function TodoList() {
  const [todoList, dispatch] = useReducer(reducer, data);
  const handleAddTodoList = () => {
    const name = prompt("please enter the title");
    const description = prompt("please enter the description");
    dispatch({ type: types.addToDoListItem, payload: { name, description } })
  };
  const handleDeleteTodoList = (id) => {
    dispatch({ type: types.deleteTodoListItem, payload: { id } })
  };
  const handleAddToDoItems = (id) => {
    const title = prompt("please enter the title");
    dispatch({ type: types.addToDoItems, payload: { TodoId: id, title } })

  };
  const handleUpdateTodoItemStatus = (todoID, itemId, e) => {
    dispatch({ type: types.updateTodoItemStatus, payload: { todoID, itemId, checked: e.target.checked } })
  };
  return (
    <div className="TodoList">
      {todoList.map((todo) => (
        <div className="todo" key={todo.id}>
          <div className="todo_head">
            <h1>{todo.name}</h1>
            <button onClick={() => handleDeleteTodoList(todo.id)}>
              delete
            </button>
          </div>
          <p>{todo.description}</p>
          <ul>
            {todo.items.map((item) => (
              <li key={`${todo.id}-${item.id}`}>
                <input
                  onChange={(e) =>
                    handleUpdateTodoItemStatus(todo.id, item.id, e)
                  }
                  type="checkbox"
                  checked={item.status}
                  id={`${todo.id}-${item.id}`}
                />
                <label htmlFor={`${todo.id}-${item.id}`}> {item.title}</label>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={() => handleAddToDoItems(todo.id)}>
              add item
            </button>
          </div>
        </div>
      ))}
      <div>
        <button onClick={handleAddTodoList}>create todo</button>
      </div>
    </div>
  );
}

export default TodoList;
