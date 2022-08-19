import React, { Fragment, useContext, useState } from "react";
import { taskContext } from "./taskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetTask = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setTaskItems([
      ...taskItems,
      { id: Math.random(), title: task.trim(), done: false },
    ]);
    setTask("");
    document.querySelector(".form-control").focus();
  };
  return (
    <Fragment>
      <h2>لیست</h2>
      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="وارد کردن یادداشت جدید"
            value={task}
            onChange={handleSetTask}
          />
          <button type="submit" className="btn btn-success">
            ثبت
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default TopForm;
