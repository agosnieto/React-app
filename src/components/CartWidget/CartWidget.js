import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'

const CartWidgest = ()=>{
    const{countQuantity,cart}=useContext(CartContext)
    if(cart.length !==0){
        return(
            <div>
                <button className='buttoCar'><img src={'./images/carrito-de-compras.png'} width="40px" class='logo'alt=""></img>{countQuantity()}
                </button>
            </div>
        )
    }else{
        return(
            <div>
                <button className='buttoCar visibilidad'><img src={'./images/carrito-de-compras.png'} width="40px" class='logo'alt=""></img>{countQuantity()}
                </button>
            </div>
        )
    }
}

export default CartWidgest