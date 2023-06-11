import TaskItem from "./TaskItem";

// styled components
import { TaskContainer } from "./Tasks.styled";

interface TaskItem {
  id: string;
  text: string;
}

interface TaskItems {
  items: TaskItem[];
}

const Tasks = (props: TaskItems) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map((task: TaskItem) => (
          <TaskItem key={task.id} id={task.id} taskItem={task.text} />
        ))}
      </ul>
    );
  }

  const content: JSX.Element = taskList;

  return (
    // <Section>
    <>
      <TaskContainer>{content}</TaskContainer>
    </>
    // </Section>
  );
};

export default Tasks;
