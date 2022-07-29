import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Header } from './components/header';
import { PaginaInicial } from './components/paginainicial';
import { Produtos } from "./components/produtos";
import './style/global.ts';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
        </Routes>
      </Router>


      
    </div>

  );
}

export default App;
