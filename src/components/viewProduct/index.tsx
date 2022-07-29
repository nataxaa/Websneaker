import { nikeProdutos } from "../../data/Data";
import { Container } from "./style";
import { useParams } from "react-router-dom";


export function ViewProduto(){
    const {id} = useParams();
    

    console.log(id)
    const produtos =  nikeProdutos ;
    
    const item = produtos.find((products)=> products.id == id as unknown as number)
    console.log(item)

    return(
        <Container>
            <div className="card-item">
            
            <img src={item?.image} alt="imagem do produto" />
            
            <div className="information">
            <h1>{item?.name}</h1>
            <span>Valor: R${item?.price},00</span>
            <strong>Tamanho: {item?.size}</strong>
            <button>Adicionar ao Carrinho</button>
            </div>
            
            </div>

            
        </Container>
    )
}