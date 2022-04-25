import React,{useState} from "react"
import './ItemCount.css'

const ItemCount=({onAdd, stock,initial, count,addProduct})=>{
return(
    <div className="count-style">
        <h5>Seleccione cantidad de productos</h5>
        <div>
        <p className="botonQuantity">
            <button onClick={()=> {if(count < stock) {onAdd('+')}}} className="boton">+</button>
            {count}
            <button onClick={()=>{if(count > initial) {onAdd('-')}}}className="boton">-</button>
        </p>
        <br></br>
        <button className="addCarrito btn-lg" onClick={()=> addProduct(count)}>Agregar al Carrito</button>
        </div>
        
    </div>
)
}
export default ItemCount

