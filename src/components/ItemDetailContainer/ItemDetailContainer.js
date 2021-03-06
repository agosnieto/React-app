import { useState,useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { firestoreBD } from "../services/firebase"
import { getDoc,doc } from "firebase/firestore"

const ItemDetailContainer=()=>{
    const[product, setProduct] = useState()

    const{id} = useParams()
    useEffect(()=>{
         getDoc(doc(firestoreBD,'products',id)).then(resp=>{
            const product={id: resp.id, ...resp.data()}
            setProduct(product)
         })
    },[id])


    return(
        <div>
            <h2>Detalle</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer