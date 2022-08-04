import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AdidasPage } from "./components/adidasPage";
import { Header } from './components/header';
import { NewPage } from "./components/newBalancePage";
import { NikePage } from "./components/nikePage";
import { PaginaInicial } from './components/paginainicial';
import { Produtos } from "./components/produtos";
import { PumasPage } from "./components/pumaPage";
import { ShopCartModal } from "./components/shopCartModal";
import { ViewprodutoNew } from "./components/viewProductNew";
import { ViewProduto } from "./components/viewProductNike";
import { ViewprodutoPuma } from "./components/viewProductPuma";
import { ViewprodutoAdidas } from "./components/viewProdutoAdidas";
import { CartProvider } from "./context/cart";
import './style/global.ts';


export function App() {

  const [newModal, setNewModal] = useState(false)

  
  function handleOpenNewModal(){
   setNewModal(true)
 }
 function handleCloseNewModal(){
 setNewModal(false)
 }

  return (
    <div className="App">
      <CartProvider>
      <Router>
          <Header  onOpenModal={handleOpenNewModal}/>
        <Routes>
          <Route path="/" element={<PaginaInicial/>}/>
          <Route path="/Produtos" element={<Produtos/>}/>
          <Route path="/NikeProdutos" element={<NikePage/>}/>
          <Route path="/AdidasProdutos" element={<AdidasPage/>}/>
          <Route path="/PumaProdutos" element={<PumasPage/>}/>
          <Route path="/NewProdutos" element={<NewPage/>}/>
          <Route path="/viewprodutoNike/:id" element={<ViewProduto/>}/>
          <Route path="/viewprodutoAdidas/:id" element={<ViewprodutoAdidas/>}/>
          <Route path="/viewprodutoPuma/:id" element={<ViewprodutoPuma/>}/>
          <Route path="/viewprodutoNew/:id" element={<ViewprodutoNew/>}/>
        </Routes>
      </Router>
      <ShopCartModal 
      isOpen={newModal}
      onRequestClose={handleCloseNewModal}
      />
      </CartProvider>
    </div>

  );
}

export default App;
