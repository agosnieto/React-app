import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../Context/CartContext"


const ItemDetail = ({name, imagen, price,stock}) => {
    const [quantity,setQuantity]= useState(0)

    const {addToCart}=useCartContext()

    const handleAddProduct = (quantity)=>{
       addToCart({name,imagen,price,stock},quantity)
       setQuantity(quantity)
    }
  
    const[count, setCount] = useState (0)

    const onAdd =(condition)=>{
        if (condition == '+')
         setCount(count + 1)
        if (condition == '-') {
            setCount (count - 1)
        }
    }
    const initial = 1;
    return(
        <section className='container'>
        <div className='cardt'>
            <div className='cardt-image'>
                <h3>{name}</h3>
                <img src={imagen} width='290px' className='img-item'></img>
                <h4>${price}</h4>
                <h4>Stock: {stock}</h4>
                {quantity > 0 ?<Link to='/cart'>Ir al Carrito</Link>:<ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} addProduct={handleAddProduct}></ItemCount>}
            </div>
        </div>
    </section>
    )
}

export default ItemDetail