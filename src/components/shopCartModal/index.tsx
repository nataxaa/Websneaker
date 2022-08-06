import { useContext } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../../context/cart';
import { Container } from './style';
import {FiX} from 'react-icons/fi'

Modal.setAppElement('#root');

interface modalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}


export function ShopCartModal({isOpen, onRequestClose}:modalProps){

    const {addProduct, productsCart, total}:any = useContext(CartContext)
    console.log(productsCart)
    console.log(total)
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
            <Container>
                <strong className='icon' onClick={onRequestClose}><FiX/></strong>
                <h1>Meus Produtos</h1>
                {productsCart.map((prod:any)=>(
                    <div className='produto'>
                        <span className='name'>{prod?.name}</span>
                        <img src={prod?.image} alt="imagem do produto" />
                        <span className='price'>{prod?.qtd}</span>
                        <span>R${prod?.price},00</span>
                    </div>
                ))}
                <strong>Valor a Pagar: R${total},00</strong>
                <button>Finalizar Compra</button>
            </Container>
        </Modal>
    )

}