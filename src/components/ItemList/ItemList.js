import Item from '../Item/Item'

const ItemList =({products})=>{
    return(
      <p>
            {products.map(prod=> <Item key={prod.id} {...prod}/>)}
      </p>
           
        
               
            
           
    )
}
export default ItemList