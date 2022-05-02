import React from "react";
import { useState } from "react";
import { useContext,createContext } from "react";

export const cartContext = createContext({})
export const useCartContext =()=> useContext(cartContext)

const CartContextProvide=(
    {children})=>{
    const[cart,setCart]= useState([])
    console.log(cart)

    const isInCart =(id)=>{cart.some(item => item.id == id)}
    const clearCart =()=>{setCart([])}

    const removeItem =(id)=>setCart(cart.filter(item=> item.id !== id))
    const addToCart =(item, quantity)=>{
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement =>{
                if (cartElement.id == item.id){
                    return {...cartElement,quantity:cartElement.quantity + quantity}
                    
                } else 
                    return cartElement
    
            })
            setCart(newCart)
            
        } else {
            setCart(prev =>[...prev,{...item, quantity}])
        }
    }
    return(
        <cartContext.Provider value={{cart, setCart,addToCart,removeItem,clearCart}}>
            {children}
        </cartContext.Provider>
    )
    }

export default CartContextProvide