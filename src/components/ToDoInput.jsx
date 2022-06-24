import { createSignal } from 'solid-js';
import { Input } from '@hope-ui/solid';

const App = () => {
  const [value, setValue] = createSignal(0);

  const handleChane = (e) => {
    setValue(e.target.value);
  };

  return <Input placeholder="Filled" variant="filled" onChange={handleChane} />;
};

export default App;
