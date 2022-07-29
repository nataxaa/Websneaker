import { Container } from "./style";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
           <h1>WebSneaker</h1>
           
           <ul>
                <li><Link to={`/`}>Pagina Inicial</Link></li>
                <li><Link to={`/Produtos`}>Produtos</Link></li>
                <li>Ofertas</li>
                <li>Contato</li>
           </ul> 
        </Container>

    )
}