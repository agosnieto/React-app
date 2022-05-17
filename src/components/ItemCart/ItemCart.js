import CartContext from "../Context/CartContext"
import { useContext, useState } from "react"
import {addDoc, documentId, getDocs, query, where, writeBatch,collection} from 'firebase/firestore'
import { firestoreBD } from "../services/firebase"
import './ItemCart.css'
import { Link} from "react-router-dom"


const ItemCart=()=>{
   
    const[order,setOrder]=useState()

    const{cart,CalcularTotal,RemoveItem,ClearCart}= useContext(CartContext)
   
    const[dataForm, setDataForm]=useState({
               
            items: cart.map(prod=>{
                return({
                    id: prod.id,
                    name: prod.name,
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
        })
        

        const handleSumit=(e)=>{
            e.preventDefault()
            setOrder({...order,
                buyer:dataForm})
        }
        const handleChange=(e)=>{
            const{value, name}=e.target
            setDataForm({
                ...dataForm,
                [name]:value
            })}
            

        const createOrder =()=>{
            const objOrder ={
                items: cart.map(prod=>{
                    return({
                        id:prod.id,
                        name:prod.name,
                        price: prod.price
                    })

                }),
                buyer:dataForm,
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
            <button onClick={createOrder} className='collectionActualize'>Crear Orden</button>
            <button>Completar Compra</button>

            <form onSubmit={handleSumit}>
            <h2>Form</h2>
            <input type='text' name="name" placeholder='Name' onChange={handleChange} value={dataForm.name
            }></input>
            <input type='number' name="phone" placeholder='Phone Number' onChange={handleChange} value={dataForm.phone} ></input>
            <input type='mail' name="email" placeholder='Email'onChange={handleChange} value={dataForm.email}></input>
        </form>
        </>
    )
   
 }}

export default ItemCart
