import { createSelector } from "@reduxjs/toolkit";

const baseSelector = (state) => state.todosReducer;

export const todosSelector = createSelector(
  baseSelector,
  (todosReducer) => todosReducer.todos
);
