import Field from "./Field";
import Button from "./Button";
import { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTaskForm = () => {
  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } =
    useContext(TasksContext);

  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!isNewTaskTitleEmpty) addTask(clearNewTaskTitle);
  };

  const onInput = (e) => {
    const { value } = e.target;
    const clearValue = value.trim();
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0;

    setNewTaskTitle(value);
    setError(hasOnlySpaces ? "The task cannot be empty" : "");
  };

  const clearNewTaskTitle = newTaskTitle.trim();
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0;

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        value={newTaskTitle}
        label="New task title"
        id="new-task"
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button isDisabled={isNewTaskTitleEmpty} type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddTaskForm;
