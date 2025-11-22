import Field from "./Field";
import Button from "./Button";
import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { onAddTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        value={newTaskTitle}
        label="New task title"
        id="new-task"
        onInput={(e) => setNewTaskTitle(e.target.value)}
        ref={newTaskInputRef}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
