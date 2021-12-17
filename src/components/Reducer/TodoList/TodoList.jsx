import { useContext } from "react";
import './TodoList.style.css'
import { types } from "../Context/reducer";
import { TodoListContext } from '../Context/Context'
import TodoCard from '../TodoCard/TodoCard'
function TodoList() {
  const { todoList, dispatch } = useContext(TodoListContext);
  const handleAddTodoList = () => {
    const name = prompt("please enter the title");
    const description = prompt("please enter the description");
    dispatch({ type: types.addToDoListItem, payload: { name, description } })
  };
  return (
    <div className="TodoList">
      {todoList.map((todo) => (
        <TodoCard todo={todo} key={todo.id} />
      ))}
      <div>
        <button onClick={handleAddTodoList}>create todo</button>
      </div>
    </div>
  );
}

export default TodoList;
