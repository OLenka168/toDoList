import './App.css';
import Photo1 from './photo1.jpg';
import Photo2 from './photo2.jpg';
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='list'>
      <div>
        <div className='container'>
          <img src={ Photo1 } width='300px' alt='pic'/>
        </div>
        <div className='container'>
          <h1>To Do List</h1>
        </div>
        <ToDoList />
        <div className='container'>
          <img src={ Photo2 } width='300px' alt='pic'/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
