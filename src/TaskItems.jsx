import React, { useContext } from "react";
import { taskContext } from "./taskContext";

const TaskItems = () => {
  //   const context = useContext(taskContext);
  //   context.taskItems
  const { taskItems, setTaskItems } = useContext(taskContext);

  const handleSetDoneTask = (id) => {
    const index = taskItems.findIndex((t) => t.id === id);
    let newTaskItem = [...taskItems];
    newTaskItem[index].done = !newTaskItem[index].done;
    setTaskItems(newTaskItem);
  };
  const handleDeleteTask = (id) => {
    let newTasks = taskItems.filter((t) => t.id !== id);
    setTaskItems(newTasks);
  };

  
  // conditional rendering
  if (taskItems.length) {
    return (
      <div className="list">
        <ul>
          {taskItems.map((task) => (
            <li className={`listItem ${task.done ? "success" : ""}`}>
              <p>{task.title}</p>
              <span>
                <i
                  className={`fa-solid ${task.done ? "fa-xmark" : "fa-check"}`}
                  onClick={() => handleSetDoneTask(task.id)}
                ></i>

                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDeleteTask(task.id)}
                ></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <h4 className="nothingAlert">هیچ یادداشتی ثبت نشده...!</h4>;
  }
};
export default TaskItems;
