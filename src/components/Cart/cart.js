import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";


const Cart=()=>{

    const{cart,RemoveItem,CalcularTotal,ClearCart,CreateOrder}= useContext(CartContext)

    if(cart.length == 0){
        return(
            <div>
                <Link to='/ItemDetailContainer'>Volver y Comprar</Link>
            </div>
        )
    }

    return(
        <>
        <ul>
        {cart.map(prod=> <li key={prod.id}>{prod.name} cantidad: {prod.quantity} precio: ${prod.price} subtotal:$ {prod.quantity * prod.price}<button onClick={()=>RemoveItem(prod.id)}>X</button></li>) }
    </ul>
    <h1>Total: $ {CalcularTotal()}</h1>
    <button onClick={ClearCart} className='limpiar'>Limpiar Carrito</button>
    <button onClick={CreateOrder} className='collectionActualize'>Crear Orden</button>
        </>
        
    )
}
export default Cart