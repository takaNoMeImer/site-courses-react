import { useState } from 'react'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {

    return (
        <>
            <nav>
                <div className={styles.nav__container}>
                    <div className={styles.nav__left}>
                        <img src="/Logo.png" alt="Logo" />
                        <p>Courses</p>
                    </div>
                    <div className={styles.nav__right}>
                        <img src="/cart.png" alt="" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;