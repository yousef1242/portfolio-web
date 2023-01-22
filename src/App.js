
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { NavbarApp } from './components/Navbar';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Skils } from './pages/Skils';


function App() {
  return (
    <div className='w-100' style={{background:"#222"}}>
    <NavbarApp/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skils/>} />
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
