import CartContext from "../Context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import {addDoc, documentId, getDocs, query, where, writeBatch,collection} from 'firebase/firestore'
import { firestoreBD } from "../services/firebase"
import './ItemCart.css'

const ItemCart=(id,name,price,quantity)=>{

    const{cart,RemoveItem,CalcularTotal,ClearCart,}= useContext(CartContext)

    const CreateOrder=()=>{
        const objOrder ={
        items: cart,
        buyer:{
            name:'Agos',
            phone:'12344900',
            email:'agos@gamil.com'
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
            if(noStock.length == 0){
                const collectionToRef = collection(firestoreBD,'usersOrders')
                return addDoc(collectionToRef,objOrder)
            }else{
                return Promise.reject({name:'Error, sin stock'})
            }
        }).then(({id})=>{
            batch.commit()
            console.log(id)

        }).catch(error=>{
            console.log(error)
        })

    }

    if(cart.length == 0){
        return(
            <div>
                <Link to='/ItemDetailContainer'>Volver y Comprar</Link>
            </div>
        )
    }

    return(
        <>
          <ul>
            {cart.map(prod=> <li key={prod.id}>{prod.name} cantidad: {prod.quantity} precio: ${prod.price} subtotal:$ {prod.quantity * prod.price}<button onClick={()=>RemoveItem(prod.id)}>X</button></li>) }
        </ul>
        <h1>Total: $ {CalcularTotal()}</h1>
        <button onClick={ClearCart} className='limpiar'>Limpiar Carrito</button>
        <button onClick={CreateOrder} className='collectionActualize'>Crear Orden</button>
        </>
      
       
       
    )
}

export default ItemCart
