
import MiddleWeb from "../layout/MiddleWeb"
import styles from "./HomeAfter.module.css"

function HomeAfter({name}){
    return (
        <section className="min-h-[500px]">
            <div className="flex justify-center text-center mt-10 text-2xl font-merienda">
                <h1 className={styles.teste}>Hello {name}, i really hope u get to appreciate my work!</h1>
                
            </div>
            <MiddleWeb></MiddleWeb>
        </section>
    )
}

export default HomeAfter