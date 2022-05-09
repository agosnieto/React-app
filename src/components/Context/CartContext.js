import React from 'react'
import {createContext,useState} from 'react'

 const CartContext = createContext()


 export const CartContextProvider =({children})=>{
        const [cart, setCart] = useState([])
        console.log(cart)

        const addItem =(addToProduct)=>{
            setCart([...cart,addToProduct])
        }

        const countQuantity =()=>{
            let count = 0
            cart.forEach(prod =>{
                count = count += prod.quantity
            })
            return count
        }
        const IsInCart=(id)=>{
            return cart.some(prod => prod.id === id)
        }

        const ClearCart=()=>{
            setCart([])
        }

        const RemoveItem=(id)=>{
           const productFilter = cart.filter(prod => prod.id !== id)
           setCart(productFilter)
        }

        return(
            <CartContext.Provider value={{cart,
            addItem,
            countQuantity,
            IsInCart,
            ClearCart,
            RemoveItem
            }}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext