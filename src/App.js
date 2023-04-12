
import './App.css';
import Login from './components/Login';
import Main from "./components/Main-page"
import Tap1 from "./page/tap1"
import Tap2 from "./page/tap2"
import Tap3 from './page/tap3';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/tap1' element={<Tap1/>}/>
        <Route path='/tap2' element={<Tap2/>}/>
        <Route path='/tap3' element={<Tap3/>}/>
      </Routes>
    </div>
  )
}

export default App;
