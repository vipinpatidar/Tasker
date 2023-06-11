import React, { useState, useContext } from "react";
import Section from "../UI/Section";

import { TaskContext } from "../../store/taskContext";

import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// styled Component

import { AddForm, SignOutBtn } from "./TaskForm.styled";

// import { collection, addDoc } from "firebase/firestore";

const TaskForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState("");

  const taskCtx = useContext(TaskContext);

  const navigate = useNavigate();
  /*
  const submitHandler = async (event) => {
    event.preventDefault();

    if (task.trim().length > 0) {
      try {
        const tasksCollections = collection(db, "tasks");

        const data = {
          task,
        };

        console.log(task);

        setIsLoading(true);
        const docRef = await addDoc(tasksCollections, data);

        console.log(docRef);

        setIsLoading(false);
        setTask("");
      } catch (error) {
        console.log(error);
      }

      // props.onEnterTask(enteredValue);
    }
  };
*/

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      taskCtx.dispatch({ type: "ADD-TASK", value: task });
      setIsLoading(false);
    }, 500);
    setTask("");
  };

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
