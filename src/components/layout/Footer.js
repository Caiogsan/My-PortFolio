import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className={`text-center ${styles.animacao}`}>
            <p className="text-xs text-">Made by: Caio Gonçalves &copy; 2023</p>
        </footer>
    )
}

export default Footer