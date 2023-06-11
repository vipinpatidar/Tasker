import React, { useReducer, ReactNode } from "react";

type TaskStateType = { id: string; text: string };

interface TaskActionType {
  type: string;
  value: string | { id: string; task: string } | any;
}

interface TaskContextProps {
  children: ReactNode;
}

interface TaskContextType {
  state: TaskStateType[];
  dispatch: (action: TaskActionType) => void;
}

export const TaskContext = React.createContext({} as TaskContextType);

const initialState = [
  {
    id: "1",
    text: "Write some code",
  },
];

const ACTIONS = {
  ADD_TASK: "ADD-TASK",
  UPDATE_TASK: "UPDATE-TASK",
  DELETE_TASK: "DELETE-TASK",
};

const reducer = (
  prevState: TaskStateType[],
  action: TaskActionType
): TaskStateType[] => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return [...prevState, { id: crypto.randomUUID(), text: action.value }];

    case ACTIONS.UPDATE_TASK:
      return prevState.map((item) =>
        item.id === action.value.id
          ? { ...item, text: action.value.task }
          : item
      );

    case ACTIONS.DELETE_TASK:
      return prevState.filter((item) => item.id !== action.value);
    default:
      return prevState;
  }
};

const TaskContextCompo = ({ children }: TaskContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);

  const context = {
    state: state,
    dispatch: dispatch,
  };

  return (
    <TaskContext.Provider value={context}> {children} </TaskContext.Provider>
  );
};

export default TaskContextCompo;
