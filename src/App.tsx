import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Header } from './components/header';
import { NikePage } from "./components/nikePage";
import { PaginaInicial } from './components/paginainicial';
import { Produtos } from "./components/produtos";
import { ViewProduto } from "./components/viewProduct";
import './style/global.ts';

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
          <Route path="/NikeProdutos" element={<NikePage/>}/>
          <Route path="/viewproduto/:id" element={<ViewProduto/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
