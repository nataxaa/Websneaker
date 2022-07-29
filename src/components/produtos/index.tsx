import { Container } from "./style";
import imagem1 from '../../images/nike.png'
import imagem2 from '../../images/adidas.png'
import imagem3 from '../../images/puma.png'
import imagem4 from '../../images/new.png'
import { Link } from "react-router-dom";



export function Produtos(){
    return(
        <Container>
            <div className="button">
                

                <div className="card-nike">
                    <img src={imagem1} alt="" />
                    <span>Total de Produtos: </span>
                    <Link to='/NikeProdutos'><button>Nike</button></Link>
                </div>

                <div className="card-adidas">
                    <img src={imagem2} alt="" />
                    <span>Total de Produtos: </span>
                    <button>Adidas</button>
                </div>

                <div className="card-puma">
                    <img src={imagem3} alt="" />
                    <span>Total de Produtos: </span>
                    <button>Puma</button>
                </div>

                <div className="card-balance">
                    <img src={imagem4} alt="" />
                    <span>Total de Produtos: </span>
                    <button>New Balence</button>
                </div>


            </div>
        </Container>
    )
}