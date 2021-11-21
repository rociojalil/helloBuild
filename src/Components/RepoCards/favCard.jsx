import React, { useContext} from 'react';
import styles from './repo.module.css'
import Github from '../Landing/media/github.png'
import { Button } from '@mui/material';
import { DataContext } from '../../Context/dataProvider'


export default function FavCard({ repo }) {

  const value = useContext(DataContext)
    const [favorite, setFavorite] = value.favorite
    console.log(value.favorite)



  function handleDeleteFavorite(event) {
    event.preventDefault()
    let favorites = favorite.filter(e=> e.id !== repo.id);
      setFavorite([...favorites])
    }
    
  return (
    <div className={styles.main} key={repo.id}>
    <div className={styles.cardContainer}  >
      <div >
        <img className={styles.img} src={Github} alt="github" />
        <h5 className={styles.cardName} >Name: {repo.name}</h5>
        <h5 className={styles.cardAttack}>Language: {repo.language}</h5>
        <h5 className={styles.cardAttack}>Default branch: {repo.defaultBranch}</h5>
        <h5 className={styles.cardAttack}>Created: {repo.created}</h5>
        <h5 className={styles.cardAttack}> Visibility: {repo.visibility}</h5>
        <a className={styles.click} href={repo.url} target="_blank" rel="noreferrer"> Click here to open your repository </a>
        <br />  
      <Button className={styles.button} variant="outlined" color="error" onClick={handleDeleteFavorite}> Delete </Button>
        </div>
        
      </div>
      
    </div>

  );
    // <div id="a" key={repo.id}>
    //   <div id="card">
    //   <Button onClick={handleDeleteFavorite}> Delete </Button>
    //     <h5 >Name: {repo.name}</h5>
    //     <h5 >Language: {repo.language}</h5>
    //     <h5 >Default branch: {repo.defaultBranch}</h5>
    //     <h5 >Created: {repo.created}</h5>
    //     <a href={repo.url}>
    //       <img id="img" src={Github} />
    //     </a>
        
    //   </div>
      
    // </div>

}


