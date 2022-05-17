import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../Context/CartContext"

const ItemDetail = ({name, img, price,stock,id}) => {
    const [quantity,setQuantity]= useState(0)

    const {addItem,IsInCart} = useContext(CartContext)

    const handleAddProduct = (quantity)=>{
            setQuantity(quantity)

            const objectProduct ={
                id,name,price,stock
            }
            addItem({...objectProduct,quantity:count})
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
                <img src={img} width='290px' className='img-item'></img>
                <h4>${price}</h4>
                <h4>Stock: {stock}</h4>
                {IsInCart(id)? <Link to='/Cart'>Terminar Compra</Link>:<ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} addProduct={handleAddProduct}></ItemCount>}
            </div>
        </div>
    </section>
    )
}

export default ItemDetail