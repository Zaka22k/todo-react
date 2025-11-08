import { useState, useEffect, useRef } from "react";
import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SearchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";
import Button from "./Button";

const ToDo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    }

    return [
      { id: "task-1", title: "Купить молоко", isDone: false },
      { id: "task-2", title: "Погладить кота", isDone: true },
    ];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const newTaskInputRef = useRef(null);
  const firstIncompleteTaskRef = useRef(null);
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id;

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Are you sure you want to delete all");

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toogleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      })
    );
  };

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now.toString(),
        title: newTaskTitle,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle("");
      setSearchQuery("");
      newTaskInputRef.current.focus();
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    newTaskInputRef.current.focus();
  }, []);

  const clearSearchQuery = searchQuery.trim().toLowerCase();
  const filteredTasks =
    clearSearchQuery.length > 0
      ? tasks.filter(({ title }) =>
          title.toLowerCase().includes(clearSearchQuery)
        )
      : null;

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm
        onAddTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button
        onClick={() =>
          firstIncompleteTaskRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Show first incomplete task
      </Button>
      <ToDoList
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        tasks={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toogleTaskComplete}
      />
    </div>
  );
};

export default ToDo;
