import Field from "./Field";
import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";

const SearchTaskForm = () => {
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form onSubmit={(event) => event.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      ></Field>
    </form>
  );
};

export default SearchTaskForm;
