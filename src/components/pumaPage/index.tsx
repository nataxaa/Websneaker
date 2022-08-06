import { Container } from "./style";
import {pumaProdutos} from '../../data/Data'
import { Link, Route, Routes } from "react-router-dom";
import { ViewProduto } from "../viewProductNike";


interface produtoProps{
    id:number,
    name:string,
    image:any,

}

export function PumasPage(){

    const produtos = pumaProdutos;
    console.log(produtos)

    
    return(
        <Container>
            <div className="Cards">

            {produtos.map((prod:produtoProps)=>(
                <div className="card">
                    <img src={prod.image} alt="imagem do produto"/>
                    <h3>{prod.name}</h3>
                    <button><Link className="link" to={`/viewprodutoPuma/${prod.id}`}>Ver Produto</Link></button>
                </div>
            ))}
            </div>
        </Container>
    )
}