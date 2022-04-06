import './Item.css'

const Item =({name, imagen, price,stock})=>{
    return(
        <div class="card bg-transparent border-light">
            <div class="card-body" width="288px">
                <h3>"{name}"</h3>
                <img src={imagen} width="150px"></img>
                <p>${price}</p>
                <button class="btn btn-light">View details</button>
                <div class="card-footer border-light"> 
                    <h6>Stock disponible: {stock}</h6>
                </div>
            </div>
        </div>
       
    )
}
export default Item