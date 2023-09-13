import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home({setNome}){
    
    return (
        <section className={`flex flex-col gap-2 justify-center items-center h-[572px] ${styles.animacao}`}>
            <h1>Tell me your name:</h1>
            <input type="text" className="p-2 bg-[#7b7b7b] rounded h-6" onChange={(e) => setNome(e.target.value)}></input>
            <Link to={"/inside"} className="font-bold hover:text-green-500">GET IN!</Link>
        </section>
    )
}

export default Home