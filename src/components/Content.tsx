import styles from '../styles/Content.module.css';

const Content = () => {
    return (
        <>
            <main>
                <div className={styles.mainContainer}>
                    <div className={styles.primaryText}>
                        Aprende con nosotros
                    </div>
                    <div className={styles.secondaryText}>
                        Cursos para ti!
                    </div>
                    <div className={styles.inputBlock}>
                        <input type="text" placeholder='Busca cursos' />
                        <img src="/search.png" alt="" />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Content;