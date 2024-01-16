
import './App.css';
import Header from './components/Header';
import Student from './components/Student';
import stu from './data/student.json'

function App() {
  return (
    <div>
      <Header />
      <div className='studentcomp'>
        {stu.map((s) => {
          return <Student {...s} />
        })}
      </div>
      <h1>React App</h1>
    </div>
  );
}

export default App;
