import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import TaskItems from "./TaskItems";
import TopForm from "./TopForm";
import { taskContext } from "./taskContext";

const App = () => {
  const [taskItems, setTaskItems] = useState([]);

  return (
    <div className="container">
      <div className="content">
        <taskContext.Provider value={{ taskItems, setTaskItems }}>
          <TopForm />
          <TaskItems />
        </taskContext.Provider>
      </div>
    </div>
  );
};
export default App;
