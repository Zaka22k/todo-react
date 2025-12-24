import ToDo from "../components/ToDo";
import { TasksProvider } from "../context/TasksContext";

const TasksPage = () => {
  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  );
};

export default TasksPage;
