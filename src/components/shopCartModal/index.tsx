import { useContext } from 'react';
import Modal from 'react-modal'
import { CartContext } from '../../context/cart';
import { Container } from './style';
import {FiX} from 'react-icons/fi'
import {SiNike, SiAdidas, SiPuma, SiNewbalance} from 'react-icons/si'

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
                <div className='final-modal'>
                   <div className='logo'>
                    <p>WebSneakers</p>
                    <p><SiAdidas className='marca'/><SiNike className='marca'/><SiNewbalance className='marca'/><SiPuma className='marca'/></p>
                   </div>

                    <div className='buy'>
                        <strong>Valor a Pagar: R${total},00</strong>
                        <button>Finalizar Compra</button>
                    </div>
                </div>
            </Container>
        </Modal>
    )

}