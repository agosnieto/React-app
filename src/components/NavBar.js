import './NavBar.css'

const NavBar =()=>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <img src={'./images/logo2.jpg'} width="100px" class='logo'></img>
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Kit destornilladores</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Cables</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link " href="#">Componentes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
export default NavBar