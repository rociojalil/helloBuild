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
                <li><a href="/home">Welcome</a></li>
                <li><a href="/">Repositories</a></li>
                <li><a href="/">Favorites</a></li>
            </ol>
            <div className={styles.logout}>
                <Link to="/">
            <box-icon name='log-out'style={{fill: "white"}} ></box-icon></Link>
            </div >
        </div>
    )
}

export default Nav