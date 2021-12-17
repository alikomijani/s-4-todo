import { makeRandomID } from "../TodoList/data";

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "addToDoListItem":
      return [
        ...state,
        {
          id: makeRandomID(),
          name: payload.name,
          description: payload.description,
          items: [],
        },
      ];
    case "deleteTodoListItem":
      return state.filter((item) => item.id !== payload.id);
    case "addToDoItems":
      return state.map((item) =>
        item.id === payload.TodoId
          ? {
              ...item,
              items: [
                ...item.items,
                { id: makeRandomID(), title: payload.title, status: false },
              ],
            }
          : item
      );
    case "updateTodoItemStatus":
      return state.map((todo) =>
        todo.id === payload.todoID
          ? {
              ...todo,
              items: todo.items.map((item) =>
                item.id === payload.itemId
                  ? { ...item, status: payload.checked }
                  : item
              ),
            }
          : todo
      );
    case "deleteTodoItem":
      return state.map((todo) =>
        todo.id === payload.todoId
          ? { ...todo, items: todo.items.filter(item=> item.id !== payload.itemId) }
          : todo
      );
    default:
      return state;
  }
}

export const types = {
  addToDoListItem: "addToDoListItem",
  deleteTodoListItem: "deleteTodoListItem",
  addToDoItems: "addToDoItems",
  updateTodoItemStatus: "updateTodoItemStatus",
  deleteTodoItem: "deleteTodoItem",
};

export default reducer;
