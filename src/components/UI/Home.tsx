import React, { useContext } from "react";

import Tasks from "../Tasks/Tasks";

import { TaskContext } from "../../store/taskContext";

// import { collection, getDoc } from "firebase/firestore";
// import { db } from "./Firebase/Firebase";

import TaskForm from "../NewTask/TaskForm";

function Home() {
  const taskCtx = useContext(TaskContext);

  /*
  const tastCollection = collection(db, "tasks");

  const getTasks = async () => {
    try {
      setIsLoading(true);
      // const data = await getDoc(tastCollection);

      // setTasks(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);
*/

  return (
    <React.Fragment>
      {/* <NewTask /> */}
      <TaskForm />

      <Tasks items={taskCtx.state} />
    </React.Fragment>
  );
}

export default Home;
