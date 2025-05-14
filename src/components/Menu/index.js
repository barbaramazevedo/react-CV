import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <header>
           <nav className={styles.nav}>
                <Link className={styles.link} to="/">Home</Link>
                <Link className={styles.link} to="/aboutme">About Me</Link>
                    
            </nav> 
        </header>
    )
}
