import Field from "../Field/Field";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

const SearchTaskForm = (props) => {
  const { styles } = props;
  const { searchQuery, setSearchQuery } = useContext(TasksContext);

  return (
    <form onSubmit={(event) => event.preventDefault()} className={styles.form}>
      <Field
        className={styles.field}
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
