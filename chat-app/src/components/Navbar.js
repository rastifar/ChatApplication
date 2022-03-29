import React from 'react';

//Styles
import styles from './Navbar.module.css'
// import honygramlogo from '../assets/honygramlogo.png'


const Navbar = ({logoutHandler}) => {
    return (
        <div className={styles.container}>
            <div className={styles.name}>
                {/* <img src={honygramlogo} style={{width:'200px',height:'70px'}}/> */}
                Honygram
            </div>
            <div className={styles.logout} onClick={logoutHandler}>logout</div>
        </div>
    );
};

export default Navbar;