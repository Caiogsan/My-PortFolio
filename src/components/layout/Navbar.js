import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"
import logo from "../../img/icons8-logo.svg"

function Navbar(){
    
    return (
        <nav className={`mt-6 border-b pb-6 ${styles.animacao}`}>
            
            <div className="flex justify-between m-auto items-center w-[60%]">
                <Link to={"/My-PortFolio"}><img src={logo} alt="Logotipo"></img></Link>
                <ul className="font-merienda text-center">

                    <p>Welcome, please enjoy everything the website has to offer!!</p>
                    <p className="testando text-[9px]">Caio Goncalves</p>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar