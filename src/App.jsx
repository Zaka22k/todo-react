import ToDo from "./components/ToDo";
import { TasksProvider } from "./context/TasksContext";

const App = () => {
  console.log("app");
  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  );
};

export default App;
