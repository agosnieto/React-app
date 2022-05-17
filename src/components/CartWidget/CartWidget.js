import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'

const CartWidgest = ()=>{
    const{countQuantity,cart}=useContext(CartContext)

    if(cart.lenght !==0){
        return(
            <div className='buttoCar '>
                <button className='buttoCar'><img src={'./images/carrito-de-compras.png'} width="40px" class='logo'alt=""></img>{countQuantity()}
                </button>
            </div>
        )
        }else{
        return(
            <div>
                <button className='buttoCar'><img src={'./images/carrito-de-compras.png'} width="40px" class='logo'alt=""></img>{countQuantity()}
                </button>
            </div>
        )
    }
}

export default CartWidgest