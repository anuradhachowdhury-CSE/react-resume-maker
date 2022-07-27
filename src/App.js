import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Home from './component/Home'
import Resume from './component/Resume'
import Cover from './component/Cover'
import CV from './component/CV'
import Error from './component/Error'
import Navbar from './component/Navbar';
import Motivation from './component/Motivation';
import Footer from './component/Footer';
import Register from './component/Register';
import Sign from './component/Sign';


function App() {
  return (
  
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>}/> 
     <Route path="/resume" element={<Resume/>}/>
      <Route path="/cv" element={<CV/>}/>
     <Route path="/cover" element={<Cover/>}/>
     <Route path="/motivation" element={<Motivation/>}/>
     <Route path="/register" element={<Register/>}/>
     <Route path="/sign" element={<Sign/>}/>
     <Route path="/*" element={<Error/>}/>
     

     </Routes>
     <Footer></Footer>
     </BrowserRouter>

   
  );
}

export default App;
