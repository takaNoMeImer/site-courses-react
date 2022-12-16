import CardContainer from "./CardContainer";
import styles from '../styles/Cursos.module.css';

const Cursos = () => {
    return (
        <>
            <section className={styles.cursos}>
            <p className={styles.textInfo}>Cursos disponibles</p>
            <CardContainer />
            </section>
        </>
    );
}

export default Cursos;