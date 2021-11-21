import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './repositorie.module.css';
import Card from './Card';
// import NavBar from '../Home/NavBar/Navbar';

export default function Repos() {

    const [repos, setRepos] = useState([])


    useEffect(() => {
        (async function () {
            const repositories = await axios.get("http://localhost:3001/users/info")
            .then((res) => { 
              return (res.data) 
            })
            setRepos([...repositories])
        })()
    }, [])

    return (
        <div>
          <h5 className={styles.titulo}>These are your repositories:</h5>
        <div className={styles.main}>
          
          {repos.map( repo => {
            return <Card repo = {repo} />
          })}
        </div>
        </div>
    )
}