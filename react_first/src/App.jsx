
import './App.scss'
// import Header from './components/Header'
// import Student from './components/Student'
import StudentForm from './components/StudentForm'
// import stu from './data/students.json'
function App() {
  return (
    <>
      {/* <Header />
      <div className='studentcomp'>
        {stu.map((s) => {
          return <Student key={s.id} {...s} />
        })}
      </div> */}

      <StudentForm />
    </>
  )
}

export default App
