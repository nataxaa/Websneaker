import { Container } from "./style";
import imagem1 from '../../images/nike.png'
import imagem2 from '../../images/adidas.png'
import imagem3 from '../../images/puma.png'
import imagem4 from '../../images/new.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";



export function Produtos(){

    const {totalNike, totalAdidas, totalNew, totalPuma}:any = useContext(CartContext)

    return(
        <Container>
            <div className="button">
                

                    <Link className="link-produto" to='/NikeProdutos'>
                <div className="card-nike">
                    <img src={imagem1} alt="" />
                    <span>Total de Produtos: <strong>{totalNike}</strong></span>
                    <button>nike</button>
                </div>
                    </Link>

                <Link className="link-produto" to='/AdidasProdutos'>
                <div className="card-adidas">
                    <img src={imagem2} alt="" />
                    <span>Total de Produtos: <strong>{totalAdidas}</strong></span>
                    <button>Adidas</button>
                </div>
                </Link>

                <Link className="link-produto" to='/PumaProdutos'>
                <div className="card-puma">
                    <img src={imagem3} alt="" />
                    <span>Total de Produtos: <strong>{totalPuma}</strong></span>
                    <button>Puma</button>
                </div>
                </Link>

                <Link className="link-produto" to='/NewProdutos'>
                <div className="card-balance">
                    <img src={imagem4} alt="" />
                    <span>Total de Produtos: <strong>{totalNew}</strong></span>
                    <button>New Balence</button>
                </div>
                </Link>


            </div>
        </Container>
    )
}