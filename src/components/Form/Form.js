import { useContext,useState } from "react"
import { getDocs,writeBatch,query,where,collection,documentId,addDoc } from "firebase/firestore"
import CartContext from "../Context/CartContext"
import { firestoreBD } from "../services/firebase"
import { NavLink } from "react-router-dom"
import './Form.css'

const Form = () => {

    const [input, setInput] = useState({nombre: '', correo: '', correoConfirm: '', direccion: '', telefono: ''})
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const { cart, CalcularTotal} = useContext(CartContext)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onBlurHandler = (event) => {
        if (input.correo === input.correoConfirm){
            setButtonDisabled(false)
        } else{
            console.log("mail incorrecto")
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            buyer: input,
            productsOrder: cart.map(prod => { return ({ id: prod.id, name: prod.name, quantity: prod.quantity, priceUni: prod.price }) }),
            total: CalcularTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreBD)

        const collectionRef = collection(firestoreBD, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if (dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if (outOfStock.length === 0) {
                    const collectionRef = collection(firestoreBD, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock })
                }
            }).then(({ id }) => {
                batch.commit()
                const orderId = id
                console.log(`El id de la orden es ${id}`)
                return setOrderId(orderId)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if (orderId) {
        return (
            <>
                <div>
                    <h2>Gracias por tu compra!</h2>
                    <p>Tu código de seguimiento es {orderId}</p>
                    <div>
                        <NavLink to="/" className='volverInicio' >Volver al inicio</NavLink>
                    </div>
                </div>
            </>
        )
    }

    if (loading) {
        return <span> Se esta generando su orden</span>
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <h2>Tus datos</h2>
                    <label>Nombre: <input required type='text' onChange={handleChange} name="nombre" value={input.nombre || ""}/></label>
                    <label>Email: <input required className={(input.correo === input.correoConfirm) ? 'blueOk' : 'redWrong'} type='text' onChange={handleChange} name="correo" value={input.correo || ""}/></label>
                    <label>Confirmar Email: <input required className={(input.correo === input.correoConfirm) ? 'blueOk' : 'redWrong'} type='text' onChange={handleChange} onBlur={onBlurHandler} name="correoConfirm" value={input.correoConfirm || ""}/></label>
                    <label>Dirección: <input required type='text' onChange={handleChange} name="direccion" value={input.direccion || ""}/></label>
                    <label>Teléfono:<input required type="number" onChange={handleChange} name="telefono" value={input.telefono || ""}/></label>
                    <button className="botonForm" onClick={() => createOrder()} required type="button" disabled={buttonDisabled}>Finalizar compra</button>
                </div>
            </div>
        </form>
    )
}

export default Form