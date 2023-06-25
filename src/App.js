import "./App.css";
import { Footer } from "./components/Footer";
import { NavbarApp } from "./components/Navbar";
import { Home } from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="w-100 App">
        <NavbarApp />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
