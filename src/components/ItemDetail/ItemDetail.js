
const ItemDetail = ({name, imagen, price,stock}) => {
    return(
        <div className='mago'>
            <div className='card body-color'>
                <div className='card-body'>
                    <h1>{name}</h1>
                    <img src={imagen}></img>
                    <p>{price}</p>
                    <div className='card-footer border-light'>
                        <p>Stock: {stock}</p>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default ItemDetail