import './NavBar.css'
import CartWidgest from './CartWidget/CartWidget'

const NavBar =()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-dark">
            <img src={'./images/logo.jpeg'} width="100px" class='logo'></img>
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Llaveros</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Set Mates</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="#">Figuras Animadas</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="#">Soportes</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidgest></CartWidgest>
        </nav>
        
    )

}
export default NavBar