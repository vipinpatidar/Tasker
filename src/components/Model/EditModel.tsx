import React, { useState } from "react";

// Styled Component
import { ModelForm, ModelSection } from "./EditModel.styled";

interface EditModelProps {
  inputTaskValue: { id: string; task: string };
  updateTask: (id: string, text: string) => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModel = ({
  inputTaskValue,
  updateTask,
  setIsOpen,
}: EditModelProps) => {
  const [oldTask, setOldTask] = useState(inputTaskValue.task);

  // sending update data

  const addUpdateTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateTask(inputTaskValue.id, oldTask);
  };

  // removing Model Button handler

  const removeModel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModelSection>
        <ModelForm>
          <input
            type="text"
            value={oldTask}
            onChange={(e) => setOldTask(e.target.value)}
          />
          <button type="submit" onClick={addUpdateTask}>
            Update Task
          </button>
          <span onClick={removeModel}>X</span>
        </ModelForm>
      </ModelSection>
    </>
  );
};

export default EditModel;
