import { useContext } from "react"
import CartContext from "../Context/CartContext"
import { Link } from "react-router-dom"
import './Cart.css'

const Cart=()=>{

    const{cart,RemoveItem,CalcularTotal,ClearCart,createOrder}= useContext(CartContext)

    if(cart.length == 0){
        return(
            <div>
                <Link to='/ItemDetailContainer' className="volverInicio">Volver y Comprar</Link>
            </div>
        ) 
    }

    return(
        <>
        <ul>
        {cart.map(prod=> <li key={prod.id}>{prod.name} cantidad: {prod.quantity} precio: ${prod.price} subtotal:$ {prod.quantity * prod.price}<button onClick={()=>RemoveItem(prod.id)}>X</button></li>) }
        </ul>
        <h1 className="total">Total: $ {CalcularTotal()}</h1>
        <button onClick={ClearCart} className='limpiar'>Limpiar Carrito</button>
        <Link to='/form'><button onClick={createOrder} className='crearOrden'>Crear Orden</button></Link>
        </>

    )
}
export default Cart