import './NavBar.css';
import { Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartWidgest from './CartWidget/CartWidget';
import { firestoreBD } from './services/firebase';
import { getDocs,collection } from 'firebase/firestore';


const NavBar=(id)=>{

    const[categories, setCategories]= useState([])

    useEffect(()=>{
        getDocs(collection(firestoreBD,'categories')).then(resp=>{
            const categories = resp.docs.map(doc=>{
                return{id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    },[])

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <Link to={'/'}><h1>HL</h1></Link>
            {categories.map(cate =><NavLink key={cate.id} to ={`/category/${cate.id}`}>{cate.description}</NavLink>)}
            <Link to={'/'}><CartWidgest></CartWidgest></Link>
        </div>
    </nav>
    
    )
}
export default NavBar