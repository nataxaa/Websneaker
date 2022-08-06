import { Container } from "./style";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi'
import { useContext } from "react";
import { CartContext } from "../../context/cart";

interface headerProps{
    onOpenModal:()=>void
}



export function Header({onOpenModal}:headerProps){

    const {quant}:any = useContext(CartContext)
    
    return(
        <Container>
           <h1>WebSneaker</h1>
           
           <ul>
                <li><Link className="link" to={`/`}>Pagina Inicial</Link></li>
                <li><Link className="link" to={`/Produtos`}>Produtos</Link></li>
                <li><Link className="link" to={`/Contato`}>Contato</Link></li>
                <li><Link className="link" to={`/Nossahistoria`}>Nossa Historia</Link></li>
                <button onClick={onOpenModal}><FiShoppingCart className="icon-shop"/><span>{quant}</span></button>
           </ul> 
        </Container>

    )
    
}