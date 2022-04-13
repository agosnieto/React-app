import { useState,useEffect } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer=()=>{
    const[product, setProduct] = useState({})

    useEffect(()=>{
         getProductosById(3).then(prods =>{
             setProduct(prods);
         })
    },[])


    return(
        <div>
            <h1>Hello World Shop</h1>
            <ItemDetail producto={product}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer