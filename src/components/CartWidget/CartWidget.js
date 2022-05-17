import './CartWidget.css'
import { useContext } from 'react'
import CartContext from '../Context/CartContext'

const CartWidgest = ()=>{
    const{countQuantity}=useContext(CartContext)

        return(
            <div className={`${countQuantity()===0 ? 'noVision' : 'visibilidad'}`}>
                <button className='buttoCar'><img src={'./images/carrito-de-compras.png'} width="40px" class='logo'alt=""></img>{countQuantity()}
                </button>
            </div>
        )
}

export default CartWidgest