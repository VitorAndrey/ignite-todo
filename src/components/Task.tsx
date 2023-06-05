import { useState } from "react";
import styles from "./Task.module.css";

import { Trash } from "phosphor-react";

interface TaskProps {
  onIsCompleted: (isCompleted: boolean) => void;
  content: string;
  onRemoveTask: (commentToRemove: string) => void;
}

export function Task({ onIsCompleted, content, onRemoveTask }: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleIsCompleted() {
    setIsCompleted((prevState) => !prevState);
    onIsCompleted(isCompleted);
  }
  function handleRemoveTask() {
    onRemoveTask(content);
  }

  return (
    <div className={styles.taskCard}>
      <div className={styles.taskCardContent} onClick={handleIsCompleted}>
        {isCompleted ? (
          <img src="src/assets/checked.svg" className={styles.checkedCircle} />
        ) : (
          <img src="src/assets/check.svg" className={styles.circle} />
        )}

        <p className={isCompleted ? styles.completedText : ""}>{content}</p>
      </div>
      <div className={styles.trashContainer}>
        <Trash size={20} className={styles.trash} onClick={handleRemoveTask} />
      </div>
    </div>
  );
}
