import { createContext } from "react";
import useTasks from "./useTasks";
import useIncomleteTaskScroll from "./useIncomleteTaskScroll";

export const TasksContext = createContext({});

export const TasksProvider = (props) => {
  const { children } = props;

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toogleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks();

  const { firstIncompleteTaskId, firstIncompleteTaskRef } =
    useIncomleteTaskScroll({ tasks });

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toogleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
