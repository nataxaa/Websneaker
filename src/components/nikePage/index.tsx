import { Container } from "./style";
import {nikeProdutos} from '../../data/Data'
import { Link, Route, Routes } from "react-router-dom";
import { ViewProduto } from "../viewProductNike";


interface produtoProps{
    id:number,
    name:string,
    image:any,

}

export function NikePage(){

    const produtos =  nikeProdutos ;
    console.log(produtos)


    
    
    return(
        <Container>

            {produtos.map((prod:produtoProps)=>(
                <div className="card">
                    <img src={prod.image} alt="imagem do produto"/>
                    <h3>{prod.name}</h3>
                    <button><Link className="link" to={`/viewprodutoNike/${prod.id}`}>Ver Produto</Link></button>
                    
                    
                </div>
            ))}
        </Container>
    )
}