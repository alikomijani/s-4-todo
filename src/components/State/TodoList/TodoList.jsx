import { useContext } from "react";
import { makeRandomID } from "./data";
import "./TodoList.style.css"
import TodoCard from "../TodoCard/TodoCard";
import { TodoContext } from "../Context/TodoContext";
function TodoList() {
  const { todoList, setTodoList } = useContext(TodoContext);
  const handleAddTodoList = () => {
    const name = prompt("please enter the title");
    const description = prompt("please enter the description");
    setTodoList([
      ...todoList,
      { id: makeRandomID(), name, description, items: [] },
    ]);
  };
  return (
    <div className="TodoList">
      {todoList.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
        />
      ))}
      <div>
        <button onClick={handleAddTodoList}>create todo</button>
      </div>
    </div>
  );
}

export default TodoList;
