import styles from "./Header.module.css";

import { PlusCircle } from "phosphor-react";

interface HeaderProps {
  onAddTask: (newTask: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  function handleAddTask() {
    onAddTask("newTask");
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/rocket.svg" alt="logo" />
        <h1>
          to<span>do</span>
        </h1>
      </div>
      <form className={styles.form} onSubmit={handleAddTask}>
        <div className={styles.inputContainer}>
          <input type="text" placeholder="Adicione uma nova tarefa" required />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </form>
    </header>
  );
}
