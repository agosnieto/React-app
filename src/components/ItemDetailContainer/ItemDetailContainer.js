import { useState,useEffect } from "react"
import { getProductosById } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemCount from "../ItemCount/ItemCount"
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { useParams } from "react-router-dom"


const ItemDetailContainer=()=>{
    const[product, setProduct] = useState({})

    const{ProductsId} = useParams()

    useEffect((ProductsId)=>{
         getProductosById(ProductsId).then(prods =>{
             setProduct(prods);
         })
    },[])


    return(
        <div>
            <h1>Detalle</h1>
            <ItemDetail {...product}/>
            <ItemCount></ItemCount>
            
        </div>
    )
}

export default ItemDetailContainer