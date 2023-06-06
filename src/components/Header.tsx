import styles from "./Header.module.css";

import { ChangeEvent, FormEvent, useState } from "react";

import { PlusCircle } from "phosphor-react";

interface HeaderProps {
  onAddTask: (newTask: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [taskValue, setTaskValue] = useState("");

  function handleAddTask(event: FormEvent) {
    event.preventDefault();
    onAddTask(taskValue);
    setTaskValue("");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskValue(event.target.value);
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
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            onChange={handleChange}
            value={taskValue}
          />
          <button>
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </form>
    </header>
  );
}
