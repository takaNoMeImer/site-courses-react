import styles from '../styles/Information.module.css';

const Information = () => {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoBlock}>
                        <img src="/icono1.png" alt="" />
                        <p className={styles.infoText}>
                        Todos los cursos a tu disposicion
                        </p>
                    </div>
                    <div className={styles.infoBlock}>
                        <img src="/icono2.png" alt="" />
                        <p className={styles.infoText}>
                        Aprende con expertos en tecnologia
                        </p>
                    </div>
                    <div className={styles.infoBlock}>
                        <img src="/icono3.png" alt="" />
                        <p className={styles.infoText}>
                            Aprende cada dia mas
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;