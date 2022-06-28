import { HopeProvider } from '@hope-ui/solid';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <HopeProvider>
      <ToDoList />
    </HopeProvider>
  );
};

export default App;
