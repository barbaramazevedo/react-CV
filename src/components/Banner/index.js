import styles from "./Banner.module.css";
import colorfulcircle from "../../assets/colorfulcircle.png";
import myphoto from "../../assets/my_photo.PNG";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>Hi, </h1>
                <p className={styles.paragraph}>I am a brazilian developer in training, passionate about technology, creativity and building solutions that make a difference. This is a web application developed with React that aims to introduce myself, share a little of my trajectory and showcase my project portfolio.</p>
            </div>
            <div className={styles.images}>
                <img className={styles.colorfulcircle} 
                    src={colorfulcircle}
                    aria-hidden={true}
                    alt="Image colorful circle"
                />   
                <img 
                    className={styles.myphoto} 
                    src={myphoto}
                    aria-hidden={true}
                    alt="Imagem Bárbara Azevedo"
                />   
            </div>
        </div>
    )
}