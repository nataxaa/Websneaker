import { Container } from "./style";
import imagem from '../../images/jordan1.jpg'


export function PaginaInicial(){
    return(
        <Container>
            <h1>Para Voçês, <span>Sneakersheads</span></h1>
            <img src={imagem} alt="" />
        </Container>
    )
}