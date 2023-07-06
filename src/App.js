import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import HomeAfter from "./components/pages/HomeAfter";
import { useState } from 'react';
import Personal from "./components/pages/Personal";
import Profissional from "./components/pages/Profissional"

function App() {
  const [nome, setNome] = useState()
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home setNome={setNome} />}/>
        <Route path="/inside" exact element={<HomeAfter name={nome} />}/>
        <Route path="/inside/personal" exact element={<Personal name={nome} />}/>
        <Route path="/inside/profissional" exact element={<Profissional name={nome} />}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
