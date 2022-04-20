import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, imagen, price}) => {
    const handleAddProduct = (quantity)=>{
        console.log(`Se agregaron ${quantity} productos`)
    }
    const[count, setCount] = useState (0)
    const onAdd =(condition)=>{
        if (condition == '+')
         setCount(count + 1)
        if (condition == '-') {
            setCount (count - 1)
        }
    }
    const stock = 15;
    const initial = 1;
    return(
        <section className='container'>
        <div className='cardt'>
            <div className='cardt-image'>
                <h3>{name}</h3>
                <img src={imagen} width='290px' className='img-item'></img>
                <h4>${price}</h4>
                <h4>Stock: {stock}</h4>
                <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count} addProduct={handleAddProduct}></ItemCount>
            </div>
        </div>
    </section>
    )
}

export default ItemDetail