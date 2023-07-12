import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onAddTask(title);

    setTitle("");
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo do Ignite" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar <PlusCircle />
        </button>
      </form>
    </header>
  );
}
