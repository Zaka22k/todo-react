import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { onAddTask, newTaskTitle, setNewTaskTitle } = props;

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
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
