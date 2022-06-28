import { createSignal } from "solid-js";
import ToDoInput from "./ToDoInput";
import ToDoItem from "./ToDoItem";
const TODO_ITEMS = [
  {
    text: "Learn SolidJS",
    isDone: false,
    id: 1,
  },
  {
    text: "Learn Reactivity",
    isDone: true,
    id: 2,
  },
];

const ToDoList = () => {
  const [todo, setTodo] = createSignal(TODO_ITEMS);

  const handleItemToggle = (itemId, isDone) => {
    const newToDo = todo().map(item => {
      if(item.id === itemId) {
        item.isDone = isDone
      }
      return item
    })
    setTodo(newToDo)
  }

  return (
    <>
      <For each={todo()}>{(item, i) =>
        <ToDoItem text={item.text} isDone={item.isDone} toggleDone={(isDone) => handleItemToggle(item.id, isDone)} />
      }</For>
      <ToDoInput />
    </>
  );
};

export default ToDoList;
