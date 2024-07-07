import { createStoreHook } from "react-redux";

const tasksState = {
  taks: [{ taskTitle: "Titile", desc: "Description" }],
};

const taskReduser = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: state.task + action.payload };
    case "DELETE_TASK":
      return {};
    default:
      return state;
  }
};

export const todoStore = createStoreHook(taskReduser(tasksState));
