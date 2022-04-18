
const ItemDetail = ({name, imagen, price,stock}) => {
    return(
        <section className='container'>
        <div className='cardt'>
            <div className='cardt-image'>
                <h3>{name}</h3>
                <img src={imagen} width='290px' className='img-item'></img>
                <h4>${price}</h4>
                <h4>Stock: {stock}</h4>
            </div>
        </div>
    </section>
    )
}

export default ItemDetail