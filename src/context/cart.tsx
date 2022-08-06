import { createContext, useContext, useState } from "react";
import { adidasProdutos, newProdutos, nikeProdutos, pumaProdutos } from "../data/Data";


interface itemProps{
    id:number,
    name:string,
    image:any,
    price:number,
    size:number,
    qtd:number
}


export const CartContext = createContext({});


export function CartProvider({children}:any){

    const [productsNike, setProductNike] = useState<itemProps[]>([]);
    const [productsAdidas, setProductAdidas] = useState<itemProps[]>([]);
    const [productsPuma, setProductPuma] = useState<itemProps[]>([]);
    const [productsNew, setProductNew] = useState<itemProps[]>([]);
    const [productsCart, setProductCart] = useState<itemProps[]>([]);
    const [quant, setQuant] = useState(0)
    const [total, setTotal] = useState(0)

    const totalNike = nikeProdutos.length
    const totalAdidas = adidasProdutos.length
    const totalPuma = pumaProdutos.length
    const totalNew = newProdutos.length
 
    function addProduct(id:number, name: string, price: number, image: any, size:number){
        
        const copyProduct = [...productsCart];
  
  
          const item = copyProduct.find((products)=>products.id == id)
  
          if(!item){
              copyProduct.push({id: id, name: name, price: price,image: image, qtd: 1, size:size})
              const aux  = quant  ;
              setQuant(aux + 1)
          }else{
              item.qtd = item.qtd + 1 ;
              const aux = quant  ;
              setQuant(aux + 1)
          }
          const aux = total 
          setTotal(aux + price)  
          setProductCart(copyProduct)
      }
      console.log(productsCart)

    return(
        <CartContext.Provider value={{totalNike, addProduct, totalAdidas, totalNew, totalPuma, productsCart, total, quant}}>
            {children}
        </CartContext.Provider>


    )



}