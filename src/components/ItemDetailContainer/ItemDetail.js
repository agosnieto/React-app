import { useState, useEffect } from "react";
import { getProductosById } from "../../asyncmock";

const DetailProduct =()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
            getProductosById(id).then(res =>{
                setProducts(res.id)

        })
    },[])
  
    return(
        <div>
            <ul>
                {products.map(p=>{
                    <li key={p.id}>
                        {p.name}
                    </li>
                })}
            </ul>
        </div>
    )

}

export default DetailProduct;