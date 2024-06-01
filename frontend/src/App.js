
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Course from'./components/Courses'
import{ Routes,Route } from 'react-router-dom'
import Signup from './components/SignUp/Signup';


function App() {
  return (
    <>
    
    

    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/course' element={<Course/>}/>
      <Route  path='/signup' element={<Signup/>}/>

    </Routes>
    </>
  ); 
}

export default App;
