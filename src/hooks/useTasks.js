import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import tasksAPI from "../api/tasksAPI";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [disappearingTaskId, setDisappearingTaskId] = useState(null);
  const [appearingTaskId, setAppearingTaskId] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const newTaskInputRef = useRef(null);

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm("Are you sure you want to delete all");

    if (isConfirmed) {
      setTasks([]);

      tasksAPI.deleteAll(tasks).then(() => setTasks([]));
    }
  }, [tasks]);

  const deleteTask = useCallback(
    (taskId) => {
      tasksAPI.delete(taskId).then(() => {
        setDisappearingTaskId(taskId);
        setTimeout(() => {
          setTasks(tasks.filter((task) => task.id !== taskId)),
            setDisappearingTaskId(null);
        }, 400);
      });
    },
    [tasks]
  );

  const toogleTaskComplete = useCallback(
    (taskId, isDone) => {
      tasksAPI.tooggleComplete(taskId, isDone).then(() => {
        setTasks(
          tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, isDone };
            }
            return task;
          })
        );
      });
    },
    [tasks]
  );

  const addTask = useCallback((title) => {
    const newTask = {
      title,
      isDone: false,
    };

    tasksAPI.add(newTask).then((addedTask) => {
      setTasks((prevTasks) => [...prevTasks, addedTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();

      setAppearingTaskId(addedTask.id);
      setTimeout(() => {
        setAppearingTaskId(null);
      }, 400);
    });
  }, []);

  useEffect(() => {
    newTaskInputRef.current.focus();

    tasksAPI.getAll().then(setTasks);
  }, []);

  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    return clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery)
        )
      : null;
  }, [searchQuery, tasks]);

  return {
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
  };
};
export default useTasks;
