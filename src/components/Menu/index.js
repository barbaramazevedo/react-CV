import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu(to) {
    return (
        <header>
           <nav className={styles.nav}>
                <MenuLink to='/'>
                    Home
                </MenuLink>
                <MenuLink to='/aboutme'>
                    About me
                </MenuLink>
            </nav> 
        </header>
    )
}
