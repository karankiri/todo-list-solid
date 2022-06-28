import { createSignal } from "solid-js";
import { Input } from "@hope-ui/solid";

const ToDoInput = () => {
  const [value, setValue] = createSignal(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Input placeholder="Filled" variant="filled" onInput={handleChange} />
    </>
  );
};

export default ToDoInput;
