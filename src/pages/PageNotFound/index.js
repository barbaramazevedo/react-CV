import MainButton from 'components/MainButton';
import styles from './PageNotFound.module.css';
import error404 from 'assets/error_404.png';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navegate = useNavigate();


    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>
                    404                
                </span>
                <h1 className={styles.title}>Ops! Page not found</h1>
                <p className={styles.paragraph}>
                    Are you sure this is what you were looking for?
                </p>
                <p className={styles.paragraph}>
                    Please wait a few moments and reload the page, or return to the home page.
                </p>
                <div 
                    className={styles.buttonContainer}
                    onClick={() => navegate(-1)}
                >
                    <MainButton size="lg">
                        Return
                    </MainButton>
                </div>
                <img 
                    className={styles.dogImage} 
                    src={error404}
                    alt='Dog with a sad face'
                />
            </div>
            <div className={styles.whiteSpace}></div>
        </>
    )
}