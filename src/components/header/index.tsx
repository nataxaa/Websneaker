import { Container } from "./style";
import { Link } from "react-router-dom";

export function Header(){
    return(
        <Container>
           <h1>WebSneaker</h1>
           
           <ul>
                <li><Link className="link" to={`/`}>Pagina Inicial</Link></li>
                <li><Link className="link" to={`/Produtos`}>Produtos</Link></li>
                <li>Ofertas</li>
                <li>Contato</li>
           </ul> 
        </Container>

    )
}