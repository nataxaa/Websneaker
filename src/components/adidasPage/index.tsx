import { Container } from "./style";
import {adidasProdutos, nikeProdutos} from '../../data/Data'
import { Link, Route, Routes } from "react-router-dom";
import { ViewProduto } from "../viewProductNike";


interface produtoProps{
    id:number,
    name:string,
    image:any,

}

export function AdidasPage(){

    const produtos =  adidasProdutos ;
    console.log(produtos)

    
    return(
        <Container>
            {produtos.map((prod:produtoProps)=>(
                <div className="card">
                    <img src={prod.image} alt="imagem do produto"/>
                    <h3>{prod.name}</h3>
                    <button><Link className="link" to={`/viewprodutoAdidas/${prod.id}`}>Ver Produto</Link></button>
                </div>
            ))}
        </Container>
    )
}