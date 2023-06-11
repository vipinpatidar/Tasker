import React, { useContext } from "react";

import Tasks from "../Tasks/Tasks";
// context
import { TaskContext } from "../../store/taskContext";

import TaskForm from "../NewTask/TaskForm";

function Home() {
  const taskCtx = useContext(TaskContext);

  return (
    <React.Fragment>
      <TaskForm />
      <Tasks items={taskCtx.state} />
    </React.Fragment>
  );
}

export default Home;
