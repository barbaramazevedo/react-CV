import styles from "./Banner.module.css";
import colorfulcircle from "../../assets/colorfulcircle.png";
import myphoto from "../../assets/my_photo.PNG";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>Olá, </h1>
                <p className={styles.paragraph}>sou uma desenvolvedora em formação, apaixonada por tecnologia, criatividade e por construir soluções que fazem a diferença. Essa é uma aplicação web desenvolvida com React que tem como objetivo me apresentar, compartilhar um pouco da minha trajetória e exibir meu portfólio de projetos.</p>
            </div>
            <div className={styles.images}>
                <img className={styles.colorfulcircle} 
                    src={colorfulcircle}
                    aria-hidden={true}
                    alt="Imagem de um círculo colorido"
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