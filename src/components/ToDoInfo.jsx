const ToDoInfo = (props) => {
  const { total, done, onDeleteAllButtonClick } = props;
  const hasTasks = total > 0;

  const handleClick = (event) => {
    console.log("Event", event);
  };
  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          onClick={onDeleteAllButtonClick}
          className="todo__delete-all-button"
          type="button"
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default ToDoInfo;
