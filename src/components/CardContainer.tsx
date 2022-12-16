import { Data } from "../Data";
import Card from "./Card";
import styles from '../styles/CardContainer.module.css';

const CardContainer = () => {
    return (
        <>
            <section className={styles.cardContainer}>
                {Data.map( item => (
                    <Card key={item.id} item={item}/>
                ))}
            </section>
        </>
    );
}

export default CardContainer;