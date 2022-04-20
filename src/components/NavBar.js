import './NavBar.css';
import { Link, NavLink} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../asyncmock';


const NavBar=(id)=>{

    const[categories, setCategories]= useState([])

    useEffect(()=>{
        getCategories().then(categories =>{
            setCategories(categories)
        })
    },[])
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <Link to={'/'}><h1>HL</h1></Link>
            {categories.map(cate =><NavLink key={cate.id} to ={`/category/${cate.id}`}>{cate.description}</NavLink>)}
        </div>
    </nav>
    
    )
}
export default NavBar