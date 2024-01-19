
import './App.css'
import Header from './components/Header'
import Student from './components/Student'
import stu from './data/students.json'
function App() {
  return (
    <>
      <Header />
      <div className='studentcomp'>
        {stu.map((s) => {
          return <Student key={s.id} {...s} />
        })}
      </div>
    </>
  )
}

export default App
