import React, { useState, useContext } from "react";
import Section from "../UI/Section";
//context
import { TaskContext } from "../../store/taskContext";
// firebase authentication
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";

// styled Component

import { AddForm, SignOutBtn } from "./TaskForm.styled";

const TaskForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState("");

  const taskCtx = useContext(TaskContext);

  const navigate = useNavigate();

  // Submit Form handler for adding a task

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      taskCtx.dispatch({ type: "ADD-TASK", value: task });
      setIsLoading(false);
    }, 500);
    setTask("");
  };

  // firebase authentication sign out handler

  const singOutUser = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Section>
      <SignOutBtn>
        <h1>TASKER</h1>
        <button onClick={singOutUser}>Sign Out</button>
      </SignOutBtn>

      <AddForm onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          required
        />
        <button>{isLoading ? "Sending..." : "Add Task"}</button>
      </AddForm>
    </Section>
  );
};

export default TaskForm;
