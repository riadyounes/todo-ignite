import { Trash, Check } from "phosphor-react";
import styles from "./Task.module.css";
import { ITask } from "../../App";

interface TaskProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}
export function Task({ task, onDelete, onComplete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <Check /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textComplete : ""}>
        {task.title}
      </p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash />
      </button>
    </div>
  );
}
