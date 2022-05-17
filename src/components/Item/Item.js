import './Item.css'
import { Link } from 'react-router-dom'

const Item =({id,name, img, price,stock})=>{
    return(
            <section className='container'>
                <div className='cardt'>
                    <div className='cardt-image'>
                        <h3 className='name-products'>{name}</h3>
                        <img src={img} width='290px' className='img-item'></img>
                        <h4>${price}</h4>
                        <h4>Stock: {stock}</h4>
                        <Link to={`/item/${id}`}>View Detail</Link>
                    </div>
                </div>
            </section>
        )
}
export default Item