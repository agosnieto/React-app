import { useState,useEffect } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer=()=>{
    const[product, setProduct] = useState()

    const{id} = useParams()
    useEffect(()=>{
         getProductosById(id).then(prods =>{
             setProduct(prods);
         })
    },[])


    return(
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer