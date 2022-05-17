import CartContext from "../Context/CartContext"
import { useContext, useState } from "react"
import {addDoc, documentId, getDocs, query, where, writeBatch,collection} from 'firebase/firestore'
import { firestoreBD } from "../services/firebase"
import './ItemCart.css'
import Cart from "../Cart/Cart"



const ItemCart=()=>{
   
    const{cart,CalcularTotal}= useContext(CartContext)
    const[order,setOrder]=useState

    const createOrder =()=>{
        const objOrder ={
            items: cart.map(prod=>{
                return({
                    id:prod.id,
                    name:prod.name,
                    price: prod.price
                })

            }),
            buyer:{
                name:'',
                phone:'',
                email:'',
            },
            total:CalcularTotal(),
            date: new Date()
        }
    
            
            const idsCart = cart.map(prod => prod.id)

            const batch = writeBatch(firestoreBD)

            const collectionToRef = collection(firestoreBD,'products')      

            const noStock =[]


        getDocs(query(collectionToRef,where(documentId(),'in',idsCart))).then(resp=>{
            resp.docs.forEach(doc=>{
                const infoDoc= doc.data()
                const infQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(infoDoc.stock >=infQuantity){
                    batch.update(doc.ref,{stock:infoDoc.stock - infQuantity})
                }else{
                    noStock.push({id:doc.id, ...infoDoc})
                }
            })
        }).then(()=>{
            if(noStock.length === 0){
                const collectionToRef = collection(firestoreBD,'usersOrders')
                return addDoc(collectionToRef,objOrder)
            }else{
                return Promise.reject({name:'Error, sin stock'})
            }
        }).then(({id})=>{
            batch.commit()
            console.log(id)
            return setOrder(order)

        }).catch(error=>{
            console.log(error)
        })


    return(

       <Cart></Cart>

    )
    
   
 }}

export default ItemCart
