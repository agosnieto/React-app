import CartContext from "../Context/CartContext"
import { useContext, useState } from "react"
import {addDoc, documentId, getDocs, query, where, writeBatch,collection} from 'firebase/firestore'
import { firestoreBD } from "../services/firebase"
import './ItemCart.css'

const ItemCart=()=>{

    const[order, setOrder]= useState(null)

    const{cart,CalcularTotal}= useContext(CartContext)
    const[buttonConfirm, setButtonConfirm]=useState(true)
    const[input, setInput]=useState({name:'', phone:'',email:'',emailConfirm:''})
    
    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    const onBlurHandler=(e)=>{
        if(input.email === input.emailConfirm){
            setButtonConfirm(false)
        }else{
            alert('Email incorrecto')
        }
    }
    const handleChange=(e)=>{
        const name = e.target.name
        const value= e.target.value
        setInput(val =>({...val,[name]:value}))
    }
    const createOrder=()=>{
        const objOrder ={
        items: cart.map(prod=>{
            return{
                id:prod.id,
                name: prod.name,
                price: prod.price,
                img: prod.img,
                stock: prod.stock
            }
        }),
        buyer:{...input},
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

    }

    return(
        <>
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit}>
                    <h2 className=''>Completa tus datos</h2>
                    <div className=''>
                        <div className=''>
                            <div className=''>
                                <label><input required className='' placeholder="Name and Surname" type='text' onChange={handleChange} name="name" value={input.name || ""} /></label>
                                <label><input required className={(input.emailConfirm === input.email) ? 'greenOk' : 'redWrong'} placeholder="Email" type='text' onChange={handleChange} name="mail" value={input.email || ""} /></label>
                                <label><input required className={(input.emailConfirm === input.email) ? 'greenOk' : 'redWrong'} placeholder="Again your email" type='text' onChange={handleChange} onBlur={onBlurHandler} name="mailConfirm" value={input.emailConfirm || ""} /></label>
                                <label><input required className='greenOk' placeholder="Phone" type="number" onChange={handleChange} name="phone" value={input.phone || ""} /></label>
                                <div>
                                    <button type="submit" onClick={() => createOrder()} className="" disabled={buttonConfirm}>Finalizar compra</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
       
    )

}

export default ItemCart
