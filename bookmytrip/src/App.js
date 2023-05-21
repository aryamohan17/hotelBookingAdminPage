import './App.css';
import Add from './components/Add';
import Admin from './components/Admin';
import Edit from './components/Edit';
import Firstpage from './components/Firstpage';
import Home from './components/Home';
import Register from './components/Register';
import View from './components/View';
import {Route,Routes} from 'react-router-dom'
import LoginUser from './user/LoginUser';
import RegisterUser from './user/RegisterUser';
import HomeUser from './user/HomeUser';


function App() {
  return (
    <div className="App">
        <Routes>
        <Route path='' element={<Firstpage/>}></Route>
        <Route path='userlogin' element={<LoginUser/>}></Route>
        <Route path='userregister' element={<RegisterUser/>}></Route>
        <Route path='homeuser' element={<HomeUser/>}></Route>

          <Route path='admin' element={<Admin/>}></Route>
          <Route path='register' element={<Register/>}></Route>          
          <Route path='add' element={<Add/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='edit/:id' element={<Edit/>}></Route>
          <Route path='view/:id' element={<View/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
