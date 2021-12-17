import { useState } from "react";
import data, { makeRandomID } from "./data";
import './TodoList.style.css'
function TodoList() {
  const [todoList, setTodoList] = useState(data);
  const handleAddTodoList = () => {
    const name = prompt("please enter the title");
    const description = prompt("please enter the description");
    setTodoList([
      ...todoList,
      { id: makeRandomID(), name, description, items: [] },
    ]);
  };
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
