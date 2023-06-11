import { useContext, useState } from "react";
//icons
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
//context
import { TaskContext } from "../../store/taskContext";
//Model
import EditModel from "../Model/EditModel";

// styled Component

import { TaskItemLi } from "./TaskItem.styled";

interface TaskItemProps {
  id: string;
  taskItem: string;
}

const TaskItem = (props: TaskItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskUpdateValue, setTaskUpdateValue] = useState({ id: "", task: "" });

  const taskCtx = useContext(TaskContext);

  // Update task using context API

  const updateHandler = (id: string, task: string) => {
    taskCtx.dispatch({ type: "UPDATE-TASK", value: { id, task } });
    setIsOpen(false);
  };

  // Open Modal Handler
  const openModelHandler = (id: string, task: string) => {
    setIsOpen(true);
    setTaskUpdateValue({ id, task });
  };

  // delete task handler
  const deleteHandler = (id: string) => {
    taskCtx.dispatch({ type: "DELETE-TASK", value: id });
  };
  return (
    <>
      {isOpen && (
        <EditModel
          inputTaskValue={taskUpdateValue}
          updateTask={updateHandler}
          setIsOpen={setIsOpen}
        />
      )}

      <TaskItemLi>
        {props.taskItem}
        <span className="icons">
          <FiEdit
            className="editIcon"
            onClick={() => openModelHandler(props.id, props.taskItem)}
          />
          <MdDelete
            className="delIcon"
            onClick={() => deleteHandler(props.id)}
          />
        </span>
      </TaskItemLi>
    </>
  );
};

export default TaskItem;
