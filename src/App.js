
import './App.css';
import Login from './components/Login';
import Main from "./components/Main-page"
import Members1 from './components/Members1';
import Members2 from './components/Members1';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/Members1' element={<Members1/>}/>
        <Route path='/Members2' element={<Members2/>}/>
      </Routes>
    </div>
  )
}

export default App;
