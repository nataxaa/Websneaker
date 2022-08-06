import { pumaProdutos } from "../../data/Data";
import { Container } from "./style";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { FiArrowLeft } from "react-icons/fi";


export function ViewprodutoPuma(){
    const {id} = useParams();
    
    const produtos =  pumaProdutos ;
    
    const {addProduct, productsCart}:any = useContext(CartContext)
    function handleAddProduto(id:any, name:any, image:any, price:any, size:any){
        addProduct(id, name, image, price, size)
        alert('Produto Adicionado')
    }

    const item = produtos.find((products)=> products.id == id as unknown as number)
    

    return(
        <Container>
            <Link className="back"  to='/PumaProdutos'><FiArrowLeft/></Link>
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