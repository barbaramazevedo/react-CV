import styles from "./AboutMe.module.css";
import ModelPost from "components/ModelPost";
import coverPhoto from "assets/about_me_cover.png";
import photoAboutMe from "assets/photoAboutMe.jpg";

export default function AboutMe() {
    return (
        <ModelPost
            coverPhoto={coverPhoto}
            title="About me"
        >

        <h3 className={styles.subtitle}>
            Hello! My name is <strong>Bárbara</strong>
        </h3>
        <img 
            src={photoAboutMe}
            alt="Photo of Bárbara"
            className={styles.photoAboutMe}
        />
        <p className={styles.paragraph}>
            Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
        </p>
        <p className={styles.paragraph}>
            Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
        </p>
        <p className={styles.paragraph}>
            No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles. 
        </p>    
        </ModelPost>
    )
}