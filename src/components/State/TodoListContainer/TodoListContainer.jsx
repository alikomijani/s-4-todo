import TodoList from "../TodoList/TodoList";
import TodoContextProvider from "../Context/TodoContext";
function TodoListContainer() {
    return (
        <TodoContextProvider>
            <TodoList />
        </TodoContextProvider>
    );
}

export default TodoListContainer;
