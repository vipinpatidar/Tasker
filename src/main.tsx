import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import TaskContextCompo from "../src/store/taskContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TaskContextCompo>
      <App />
    </TaskContextCompo>
  </React.StrictMode>
);
