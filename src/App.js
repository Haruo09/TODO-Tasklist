import './App.css';
import { TodoForm } from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>Get Things Ready!</h1>
      <TodoForm onInputChange={(e) => console.log(e.target.value)}/>
    </div>
  );
}

export default App;
