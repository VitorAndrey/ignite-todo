import { useState } from "react";
import styles from "./App.module.css";

import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import { tasks } from "./data/tasks";

interface NewTaskCreated {
  content: string;
  id: string;
}

function App() {
  const [taskList, setTaskList] = useState(tasks);

  function onRemoveTask(id: string) {
    const listWithoutDeleted = taskList.filter((task) => task.id !== id);
    setTaskList(listWithoutDeleted);
  }
  function onAddTask(newTask: string) {
    const id = taskList.length + 1;

    const newTaskCreated: NewTaskCreated = {
      id: id.toString(),
      content: newTask,
    };
    setTaskList([...taskList, newTaskCreated]);
  }

  return (
    <div className={styles.container}>
      <Header onAddTask={onAddTask} />
      <TasksList tasks={taskList} onRemoveTask={onRemoveTask} />
    </div>
  );
}

export default App;
