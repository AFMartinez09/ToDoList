import './App.css'
import TaskList from './components/TaskList';

function App() {

  return (
    <>
      <div className='app'>
        <div className='main-tasks'>
          <h1>TO DO LIST</h1>
          <TaskList />
        </div>
      </div>
    </>
  )
}

export default App;
