import { nikeProdutos } from "../../data/Data";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cart";
import { useContext } from "react";


export function ViewProduto(){
    const {id} = useParams();
    
    
    const produtos =  nikeProdutos ;
    
    const {addProduct, productsCart}:any = useContext(CartContext)
    function handleAddProduto(id:any, name:any, image:any, price:any, size:any){
        addProduct(id, name, image, price, size)
    }

    const item = produtos.find((products)=> products.id == id as unknown as number)
    

    return(
        <Container>
            <div className="card-item">
            
            <img src={item?.image} alt="imagem do produto" />
            
            <div className="information">
            <h1>{item?.name}</h1>
            <span>Valor: R${item?.price},00</span>
            <strong>Tamanho: {item?.size}</strong>
            <button onClick={()=>handleAddProduto(item?.id, item?.name, item?.price, item?.image, item?.size)}>Adicionar ao Carrinho</button>
            </div>
            
            </div>

            
        </Container>
    )
}