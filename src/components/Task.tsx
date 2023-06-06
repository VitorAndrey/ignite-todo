import { useState } from "react";
import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

import check from "../assets/check.svg";
import checked from "../assets/checked.svg";

interface TaskProps {
  onIsCompleted: (isCompleted: boolean) => void;
  onRemoveTask: (commentToRemove: string) => void;
  removeOne: () => void;
  content: string;
  id: string;
}

export function Task({ onIsCompleted, content, id, onRemoveTask, removeOne }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleIsCompleted() {
    setIsCompleted((prevState) => !prevState);
    onIsCompleted(isCompleted);
  }

  function handleRemoveTask() {
    if (isCompleted) {
      removeOne();
    }
    onRemoveTask(id);
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskCardContent} onClick={handleIsCompleted}>
        {isCompleted ? (
          <img src={checked} className={styles.checkedCircle} />
        ) : (
          <img src={check} className={styles.circle} />
        )}

        <p className={isCompleted ? styles.completedText : ""}>{content}</p>
      </div>
      <div className={styles.trashContainer} onClick={handleRemoveTask}>
        <Trash size={20} className={styles.trash} />
      </div>
    </div>
  );
}
