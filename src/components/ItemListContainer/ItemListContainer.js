import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs,collection,query,where } from 'firebase/firestore'
import { firestoreBD } from '../services/firebase'

export const ItemListContainer = ()=>{

    const{categoryId}=useParams()
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const collectionProd = categoryId
            ?query(collection(firestoreBD,'products'),where('category','==',categoryId))
            :collection(firestoreBD,'products')

           getDocs(collectionProd).then(resp=>{
               const products =resp.docs.map(doc =>{
                   return{id: doc.id, ...doc.data()}
               })
               setProducts(products)
           })
    },[categoryId])

    return(
        <div>
            <ItemList products={products}></ItemList>
        </div>
        
    )
}

export default ItemListContainer