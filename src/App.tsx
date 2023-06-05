import { useState } from "react";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import { tasks } from "./data/tasks";

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function onRemoveTask(taskToRemove: string) {
    console.log(taskToRemove);
  }
  function onAddTask(newTask: string) {
    console.log(newTask);
  }

  return (
    <div className={styles.container}>
      <Header onAddTask={onAddTask} />
      <TasksList tasks={taskList} onRemoveTask={onRemoveTask} />
    </div>
  );
}

export default App;
