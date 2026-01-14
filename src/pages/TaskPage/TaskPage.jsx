import { useEffect, useState } from "react";
import tasksApi from "@/shared/api/tasks";

const TaskPage = (props) => {
  const { params } = props;
  const taskId = params.id;

  const [task, setTask] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    tasksApi
      .getById(taskId)
      .then((taskData) => {
        setTask(taskData);
        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  });

  if (isLoading) return <div>loading</div>;
  if (hasError) return <div>task not foung</div>;
  return (
    <div>
      <h1>{task.title}</h1>
      {task.isDone ? "Задача не выполнена" : "Задача выполнена"}
    </div>
  );
};

export default TaskPage;
