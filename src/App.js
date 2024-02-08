import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoTask } from './components/TodoTask';

function App() {
  return (
    <div className="App">
      <h1>Get Things Ready!</h1>
      <TodoForm onInputChange={(e) => console.log(e.target.value)} />
      <TodoTask value="Teste" />
    </div>
  );
}

export default App;
