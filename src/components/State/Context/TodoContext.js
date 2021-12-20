import { createContext , useState } from "react";
import data from "../TodoList/data";

export const TodoContext = createContext({todoList:[] , setTodoList:(input)=>{}});

const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState(data);
  return <TodoContext.Provider value={{todoList , setTodoList}}>{children}</TodoContext.Provider>;
};

export default TodoContextProvider;

