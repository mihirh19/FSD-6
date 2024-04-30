
import './App.css'
import { Provider } from "react-redux"
import store from './store/store'
import Lists from './components/Lists'
function App() {

  return (
    <>
      <Provider store={store}>
        <div>
          <h1>React-redux</h1>
          <Lists />
        </div>
      </Provider>
    </>
  )
}

export default App
