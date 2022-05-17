import { useContext } from "react";
import CartContext from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { Link } from "react-router-dom";


const Cart=()=>{
    return(
        <ItemCart></ItemCart>
    )
}
export default Cart