import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item =({id,name, imagen, price,stock})=>{
    return(
            <section className='container'>
                <div className='cardt'>
                    <div className='cardt-image'>
                        <h3>{name}</h3>
                        <img src={imagen} width='290px' className='img-item'></img>
                        <h4>${price}</h4>
                        <h4>Stock: {stock}</h4>
                        <Link to={`/detail/${id}`}>View Detail</Link>
                    </div>
                </div>
            </section>
        )
}
export default Item