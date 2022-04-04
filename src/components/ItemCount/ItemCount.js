import React,{useState} from "react"
import './ItemCount.css'

const ItemCount=({onAdd, stock,initial, count})=>{
return(
    <div className="showProducto">
        <p>Llavero Harry Potter</p>
        <p className="botonQuantity">
            <button onClick={()=> {if(count < stock) {onAdd('+')}}} className="boton">+</button>
            {count}
            <button onClick={()=>{if(count > initial) {onAdd('-')}}}className="boton">-</button>
        </p>
        <br></br>
        <button className="addCarrito btn-lg">Agregar al Carrito</button>
    </div>
)
}
export default ItemCount
