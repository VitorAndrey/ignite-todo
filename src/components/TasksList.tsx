import styles from "./TasksList.module.css";
import { Task } from "./Task";
import { useState } from "react";

import { Tasks } from "../data/tasks";

interface TaskListProps {
  tasks: Tasks[];
  onRemoveTask: (commentToRemove: string) => void;
}

export function TasksList({ tasks, onRemoveTask }: TaskListProps) {
  const [completedTasks, setCompletedTasks] = useState(0);

  function onIsCompleted(isCompleted: boolean) {
    if (isCompleted == false) {
      setCompletedTasks((prev) => prev + 1);
    } else {
      setCompletedTasks((prev) => prev - 1);
    }
  }

  function removeOne() {
    setCompletedTasks((prev) => prev - 1);
  }

  return (
    <section className={styles.tasks}>
      <header>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluidas{" "}
          {tasks.length !== 0 ? (
            <span>
              {completedTasks} de {tasks.length}
            </span>
          ) : (
            <span>{completedTasks}</span>
          )}
        </p>
      </header>
      {tasks.length === 0 ? (
        <div className={styles.tasksList}>
          <img src="src/assets/Clipboard.svg" alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      ) : (
        tasks.map((task) => (
          <Task
            onIsCompleted={onIsCompleted}
            key={task.id}
            content={task.content}
            id={task.id}
            onRemoveTask={onRemoveTask}
            removeOne={removeOne}
          />
        ))
      )}
    </section>
  );
}
