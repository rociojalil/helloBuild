import React from 'react'
import styles from './Nav.module.css'
import logo from './builddd.png';
import logout from './cerrar.png';
import 'boxicons';

function Nav() {
    return (
        <div className={styles.navBar}>
            <div className={styles.logoApp}>
                <img src={logo} alt="logo" />
                {/* <i class="fas fa-paw"></i> */}
            </div >
            <ol className={styles.navigation}>
                <li><a href="/">Welcome</a></li>
                <li><a href="/">Repositories</a></li>
                <li><a href="/">Favoritos</a></li>
                <li className={styles.logout}><box-icon name='log-out'style={{fill: "white"}}></box-icon></li>
         
            </ol>
        </div>
    )
}

export default Nav