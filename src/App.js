

import './App.css';
import { Footer } from './components/Footer';
import { NavbarApp } from './components/Navbar';
import { Home } from './components/Home';



function App() {


  return (
    <>
    <div className='w-100 App'>
    <NavbarApp/>
    <Home/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
