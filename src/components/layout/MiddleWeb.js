import styles from "./MiddleWeb.module.css"
import { useNavigate } from "react-router-dom";

function MiddleWeb(){
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `personal`; 
    navigate(path);
  }
    const routeChange2 = () =>{ 
    let path = `profissional`; 
    navigate(path);
  }

    return (
        <section className={`w-[98%] m-auto flex h-[800px] mb-4 ${styles.animacao}`}>
            <div onClick={routeChange} className="bg-personal duration-500 hover:scale-100 scale-90 grayscale hover:grayscale-0  bg-cover bg-no-repeat rounded w-[50%] flex hover:cursor-pointer">
                <span className="bg-transparent text-3xl mt-32 text-center font-merienda m-auto">Personal Life</span>
            </div>
            <div onClick={routeChange2} className="bg-code duration-500 hover:scale-100 scale-90 bg-center grayscale hover:grayscale-0  bg-cover bg-no-repeat rounded w-[50%] flex hover:cursor-pointer">
            <span className="bg-transparent text-3xl mt-32 text-center font-merienda m-auto">Profissional Life</span>
            </div>
        </section>
    )
}

export default MiddleWeb