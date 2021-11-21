import React, { useContext } from 'react';
import styles from './repo.module.css';
import Github from '../Landing/media/github.png'
import { DataContext } from "../../Context/dataProvider"
import { Button } from '@mui/material';


export default function RepoCard({ repo }) {

  const value = useContext(DataContext)
  const [favorite, setFavorite] = value.favorite

  async function handleFavorite(event) {
    let fav = favorite.map( e => e.id).includes(repo.id)
    event.preventDefault()
    if(!fav){
      let obj = {
        id: repo.id,
        name: repo.name,
        language: repo.language,
        defaultBranch: repo.defaultBranch,
        created: repo.created,
        visibility: repo.visibility
    }
      setFavorite([...favorite,obj])
    }
  }


  return (
    <div className={styles.main}>
    <div className={styles.cardContainer} key={repo.id}>
      <div >
          <img className={styles.img} src={Github} />
        <h5 className={styles.cardName} >Name: {repo.name}</h5>
        <h5 className={styles.cardAttack}>Language: {repo.language}</h5>
        <h5 className={styles.cardAttack}>Default branch: {repo.defaultBranch}</h5>
        <h5 className={styles.cardAttack}>Created: {repo.created}</h5>
        <h5 className={styles.cardAttack}> Visibility: {repo.visibility}</h5>
        <a href={repo.url}>
          <br />
        <Button className={styles.button} variant="contained" color="success" onClick={handleFavorite}>Favorite</Button>
        {/* <Button onClick={handleFavorite}> Favorite </Button> */}
        </a>
        </div>
        
      </div>
      
    </div>

  );
}