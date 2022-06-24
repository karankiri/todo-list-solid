import { createSignal } from 'solid-js';
import ToDoInput from './components/ToDoInput';
import { HopeProvider } from '@hope-ui/solid';

const App = () => {
  return (
    <HopeProvider>
      <ToDoInput />
    </HopeProvider>
  );
};

export default App;
