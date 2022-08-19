import { createContext } from "react";

export const taskContext = createContext({
  taskItems: [], // an array
  setTaskItems: () => {}, // a function
});
