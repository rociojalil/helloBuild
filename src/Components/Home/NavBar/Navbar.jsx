import React from 'react'
import styles from './Nav.module.css'
import logo from './builddd.png';
import 'boxicons';
import {Link} from 'react-router-dom'

function Nav() {


    return (
        <div className={styles.navBar}>
            <div className={styles.logoApp}>
                <img src={logo} alt="logo" />
                {/* <i class="fas fa-paw"></i> */}
            </div >
            <ol className={styles.navigation}>
                <li><Link to="/home">Welcome</Link></li>
                <li><Link to="/repositories">Repositories</Link></li>
                <li><Link to="/repositories/favorites">Favorites</Link></li>
            </ol>
            <div className={styles.logout}>
                <Link to="/">
            <box-icon name='log-out'style={{fill: "white"}} ></box-icon></Link>
            </div >
        </div>
    )
}

export default Nav