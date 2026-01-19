import { createContext, useMemo } from "react";
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

  const value = useMemo(
    () => ({
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
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    }),
    [
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
      firstIncompleteTaskId,
      firstIncompleteTaskRef,
    ]
  );

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
