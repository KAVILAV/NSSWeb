
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/AUHome';
import Home from './pages/UserHome';
import Register from './pages/register';
import UserRegister from './pages/userregister';
import Userget from './pages/userget';
import Volunteer from './pages/Volunteer';
import Admin from './pages/1.Admin';
import User from './pages/1.User';
import Login from './pages/Login';
import Adminlogin from './pages/Adminlogin';
import Volget from './pages/volget';
import BasicExample from './pages/ll';
function App(){
  return (
    <BrowserRouter>
       <Routes>
       <Route path='/' element={<HomePage/>}></Route>
       <Route path='/user' element={<Home/>}></Route>
        <Route path='/adminhome' element={<Admin/>}></Route>
        <Route path='/adminlogin' element={<Adminlogin/>}></Route>
        <Route path='/volget' element={<Volget/>}></Route>
        <Route path='/userhome' element={<User/>}></Route>
        <Route path='/userlogin' element={<Login/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/userregister" element={<UserRegister/>}></Route>
         <Route path="/userget" element={<Userget/>}></Route>
         <Route path='/volunteer' element={<Volunteer/>}></Route> 


         <Route path='/BasicExample' element={<BasicExample/>}></Route>  
         </Routes>
    </BrowserRouter>
  )
}


export default App;
