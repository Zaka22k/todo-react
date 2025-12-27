import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import ToDoInfo from "../ToDoInfo/ToDoInfo";
import ToDoList from "../ToDoList/ToDoList";
import Button from "../Button/Button.jsx";
import { TasksContext } from "../../context/TasksContext.jsx";
import { useContext } from "react";
import styles from "./ToDo.module.scss";

const ToDo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext);
  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <ToDoInfo styles={styles} />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Show first incomplete task
      </Button>
      <ToDoList styles={styles} />
    </div>
  );
};

export default ToDo;
