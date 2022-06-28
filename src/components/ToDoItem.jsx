import { Checkbox } from "@hope-ui/solid";

const ToDoItem = ({ isDone, text, toggleDone }) => {
  console.log("🚀 ~ file: ToDoItem.jsx ~ line 4 ~ ToDoItem ~ isDone", isDone)
  const handleChange = (e) => {
    toggleDone(!isDone);
  };

  return (
    <>
      <Checkbox checked={isDone} size="lg" onInput={handleChange}>
        {text}
      </Checkbox>
    </>
  );
};

export default ToDoItem;
