import { useState, useEffect } from "react";
import { getProductosById } from "../../asyncmock";

const DetailProduct =()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProductosById(4).then(prods =>{
            setProducts(prods)
        })
},[])
  
    return(
            <ul>
                {products.map(prod=> <ul key={prod.id} {...prod}/>)}
            </ul>
        
    )

}

export default DetailProduct;