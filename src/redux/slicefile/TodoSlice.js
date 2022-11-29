import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todos",
  initialState: {
    todoList: [] 
  },
  reducers: {
    addTodo: (state, action) => {
        const todo = {
            id: `${Math.random()}`,
            text: action.payload,
        };
        state.todoList.push(todo);
        console.log('[STATE] ===>', JSON.stringify(state.todoList))
    },
    removeTodo:(state,action)=>{
          let removeitem=[...state.todoList]
          console.log("action removeitem 1==>",removeitem)
           removeitem.splice(action.payload,1)
           state.todoList=[...removeitem]
           console.log("splice item==>",removeitem.splice(action.id,1))
    }
  },
});
export const {addTodo,removeTodo} =TodoSlice.actions;
export default TodoSlice.reducer