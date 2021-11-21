import React from 'react';
import styles from './Home.module.css';
import { Button } from '@mui/material';
import logo from '../Landing/media/github.png'



export default function Home () {


    return (
        
            <div className={styles.main}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className={styles.text}>
                <img src={logo} alt="logo" className={styles.logo}/>
                <h1>Welcome! </h1>
                <h2> Let's see here all your repositories on your Github account </h2>
                <br/>
                <Button href={'https://github.com/login/oauth/authorize?client_id=a3b0deff790f5d29c56f&redirect_uri=http://localhost:3001/users/repo'} variant="contained">Click here to link your account</Button>
                <br/><br/>
                <p className={styles.info}> If you are not logged into your account, you can do it there!</p>
                
                </div>
                <br />
                <br />
                <br />
                <br />
    
            
          
          
            </div> 
        
    
        )
    }