import React, { useEffect, useState } from 'react'
import { getProductos } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ()=>{

    const{categoryId}=useParams()
    const [products, setProducts] = useState([])
    useEffect(()=>{
            getProductos(categoryId).then(prods =>{
                (setProducts(prods))
            })
    },[categoryId])

    return(
        <div>
            <ItemList products={products}></ItemList>
        </div>
        
    )
}

export default ItemListContainer