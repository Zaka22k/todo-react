import Field from "./Field";

const SearchTaskForm = (props) => {
  const { onSearchInput } = props;

  return (
    <form onSubmit={(event) => event.preventDefault()} className="todo__form">
      <Field
        className="todo__field"
        label="Search task"
        id="search-task"
        type="search"
        onInput={(event) => onSearchInput(event.target.value)}
      ></Field>
    </form>
  );
};

export default SearchTaskForm;
