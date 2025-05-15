import styles from './Footer.module.css';
import { ReactComponent as RegisterLogo } from '../../assets/register_logo.svg';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <RegisterLogo />
            <p className={styles.text}>Developed by Bárbara Azevedo</p>
        </footer>
    )
}