import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
// 액션
const ADD = "ADD";
const DELETE = "DELETE";

// 액션 크리에이터
const addToDo = createAction(ADD);
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

const deleteToDo = createAction(DELETE);
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// 리듀서
const reducer = createReducer(
  [
    /*initialState*/
  ],
  {
    [ADD]: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    [DELETE]: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  }
);
// const reducer = (state = ["hello"], action) => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// 스토어
const store = configureStore({ reducer });
// const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
