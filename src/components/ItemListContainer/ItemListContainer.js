import React, { useEffect, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting})=>{
    const [products, setProducts] = useState([])
    useEffect(()=>{
            getProductos().then(prods =>{
                (setProducts(prods))
            })
    },[])

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
            <ItemList products={products}></ItemList>
        </div>
        
    )
}

export default ItemListContainer