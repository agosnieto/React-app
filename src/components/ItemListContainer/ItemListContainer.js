import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting})=>{
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
        <div>
        <h4>{greeting}</h4>
        <ItemCount onAdd={onAdd} stock={stock} initial={initial} count={count}></ItemCount>
        </div>
        
    )
}

export default ItemListContainer