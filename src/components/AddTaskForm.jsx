import Field from "./Field";
import Button from "./Button";

const AddTaskForm = (props) => {
  const { onAddTask } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTask();
  };

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field className="todo__field" label="New task title" id="new-task" />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
