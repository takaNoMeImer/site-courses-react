import styles from '../styles/Card.module.css';

interface CardProps {
    item: Item;
}

const Card = ({item}:CardProps) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    <img src={item.poster} alt="" />
                </div>
                <div className={styles.cardNombre}>
                    <p>{item.nombre}</p>
                </div>
                <div className={styles.cardTutor}>
                    Imer Gonzalez
                </div>
                <div className={styles.cardPrecio}>
                    <p>15$</p>
                </div>
                <div className={styles.cardInputBlock}>
                    <input type="button" value="Agregar" />
                </div>
            </div>
        </>
    );
}
 
export default Card;