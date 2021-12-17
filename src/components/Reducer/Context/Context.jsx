import { useReducer, createContext } from 'react'
import data from '../TodoList/data'
import reducer from './reducer'

export const TodoListContext = createContext({ todoList: [], dispatch: () => { } })

const TodoListContextProvider = ({ children }) => {
    const [todoList, dispatch] = useReducer(reducer, data)
    return (
        <TodoListContext.Provider value={{ todoList, dispatch }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider
