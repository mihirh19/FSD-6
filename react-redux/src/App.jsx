
import './App.css'
import { Provider } from "react-redux"
import store from './store/store'
import Login from './components/Login'
function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          <h1>React-redux</h1>
          <Login />
        </div>
      </Provider>
    </>
  )
}

export default App
