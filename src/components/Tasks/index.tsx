import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./Tasks.module.css";
import clipboard from "../../assets/Clipboard.png";

interface TaksProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: TaksProps) {
  const tasksCount = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.tasksCreated}>
          <p>Tarefas criadas</p>
          <span>{tasksCount}</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          <span>
            {completedTask === 0
              ? completedTask
              : completedTask + " de " + tasksCount}
          </span>
        </div>
      </header>
      <div className={styles.taskList}>
        {tasksCount !== 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onComplete={onComplete}
            />
          ))
        ) : (
          <div className={styles.emptyAlign}>
            <div className={styles.empty}>
              <img src={clipboard} alt="clipboard" />
              <p>
                <b>Você ainda não tem tarefas cadastradas</b> <br />
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
