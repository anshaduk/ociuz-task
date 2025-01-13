import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            
            state.push({ id: state.length + 1, task: action.payload, edit: false, completed: false });
        },

        editTodo: (state, action) => {
            
            return state.map((item) => item.id === action.payload ? { ...item, edit: true } : item);
        },

        updateTodo: (state, action) => {
            
            return state.map((item) =>
                item.id === action.payload.id
                    ? { id: item.id, task: action.payload.task, edit: false, completed: item.completed }
                    : item
            );
        },

        deleteTodo: (state, action) => {
            
            return state.filter((item) => item.id !== action.payload);
        },

       
        toggleComplete: (state, action) => {
            return state.map((item) =>
                item.id === action.payload
                    ? { ...item, completed: !item.completed } 
                    : item
            );
        }
    }
});

export const { addTodo, editTodo, updateTodo, deleteTodo, toggleComplete } = todoReducer.actions;
export default todoReducer.reducer;
