// import React from 'react';
import './App.scss'
import EffectComponent from './components/EffectComponent'
// import { DataProvider } from './components/UseReducerComponent';
// import ContextData from './components/ContextData';
// import Page from './components/contextApi/Page'
// import Header from './components/Header'
// import Student from './components/Student'
// import StudentForm from './components/StudentForm'
// import stu from './data/students.json'
// const UsernameContext = React.createContext();


function App() {
  return (
    <>
      {/* <Header />
      <div className='studentcomp'>
        {stu.map((s) => {
          return <Student key={s.id} {...s} />
        })}
      </div> */}

      {/* <StudentForm /> */}
      <EffectComponent />

      {/* <DataProvider>
        <ContextData />
      </DataProvider> */}

      {/* <Page /> */}
      {/* <UsernameContext.Provider value={'Mihir'}>
        <Page />
      </UsernameContext.Provider> */}
    </>
  )
}
// export { UsernameContext };

export default App
