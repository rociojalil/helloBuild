import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './repositorie.module.css';
import RepoCard from './repoCard';
// import NavBar from '../Home/NavBar/Navbar';

export default function Repos() {

    const [repos, setRepos] = useState([])


    useEffect(() => {
        (async function () {
            const repositories = await axios.get("http://localhost:3001/users/info")
            .then((response) => { 
              return (response.data) 
            })
            setRepos([...repositories])
            // los repos se guardan en ese estado? xq? para pasarlo como prop desp?
        })()
    }, [])

    return (
        
        <div className={styles.main}>
          {/* <NavBar/> */}
          <h1>These are your repositories:</h1>
          {repos && repos?.map( repo => {
            return <RepoCard repo = {repo} />
          })}
        </div>
    )
}