import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";

function App() {
  return (
    <>
      <div>
        <Header />
        <main className={styles.main}>
          <div className={styles.form}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
              Criar <PlusCircle />
            </button>
          </div>
          <div className={styles.headerTask}>
            <div className={styles.tasksCreated}>
              <p>
                Tarefas criadas <span>0</span>
              </p>
            </div>
            <div className={styles.completedTasks}>
              <p>
                Concluídas <span>0</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
