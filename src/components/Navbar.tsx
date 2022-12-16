import { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Carrito from './Carrito';

const Navbar = () => {

    const [valueCart, setValueCart] = useState<boolean>(false)

    let ShowTest = () => {return <></>}

    if (valueCart) {
        ShowTest = () => {return <><Carrito /></>}
    }

    return (
        <>
            <nav>
                <ShowTest />
                <div className={styles.nav__container}>
                    <div className={styles.nav__left}>
                        <img src="/Logo.png" alt="Logo" />
                        <p>Courses</p>
                    </div>
                    <div onClick={ () => setValueCart(!valueCart) } className={styles.nav__right}>
                        <img src="/cart.png" alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;