import { memo, useContext, useMemo } from "react";
import { TasksContext } from "../context/TasksContext";

const ToDoInfo = () => {
  const { tasks, deleteAllTasks } = useContext(TasksContext);
  const total = tasks.length;
  const hasTasks = total > 0;

  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length;
  }, [tasks]);

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
          onClick={deleteAllTasks}
          className="todo__delete-all-button"
          type="button"
        >
          Delete all
        </button>
      )}
    </div>
  );
};

export default memo(ToDoInfo);
