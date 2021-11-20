import React from 'react';
import Video from './media/codigo.mp4'
import styles from './Landing.module.css';
import logo from './media/github.png'
import Registration from './Registration';

const Landing = () => {
    return (

   
        <div className={styles.container}>
            <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: "-1"
                    }}
                >
                <source src={Video} type="video/mp4"></source>
            </video>

                <div className={styles.titulo}>
                    <h1> Welcome!  </h1> 
            </div>
                    <h2 className={styles.titulo2}>Check your Github repositories! </h2> <img src={logo} alt="logo" className={styles.logo}/>
                    <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                    <Registration />

                <div className={styles.yo}>
                    <h4>Created by 
                    <a href="https://www.linkedin.com/in/rocio-de-luz-jalil/"
                     rel='noreferrer' target="_BLANK" className={styles.socialMedia}> Rocío Jalil </a>
                     </h4>
            </div>
        </div>
    )
}

export default Landing;