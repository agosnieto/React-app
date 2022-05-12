import CartContext from "../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const ItemCart=(id,name,price,quantity)=>{

    const{cart,RemoveItem,CalcularTotal}= useContext(CartContext)


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
        <h1>Total:{CalcularTotal}</h1>
        </>
      
       
       
    )
}

export default ItemCart
