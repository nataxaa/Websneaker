import { Container } from "./style";
import { Link } from "react-router-dom";
import {FiShoppingCart} from 'react-icons/fi'

interface headerProps{
    onOpenModal:()=>void
}

export function Header({onOpenModal}:headerProps){
    return(
        <Container>
           <h1>WebSneaker</h1>
           
           <ul>
                <li><Link className="link" to={`/`}>Pagina Inicial</Link></li>
                <li><Link className="link" to={`/Produtos`}>Produtos</Link></li>
                <li>Ofertas</li>
                <li>Contato</li>
                <button onClick={onOpenModal}><FiShoppingCart className="icon-shop"/></button>
           </ul> 
        </Container>

    )
    
}