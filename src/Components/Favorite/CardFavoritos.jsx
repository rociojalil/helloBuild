import React, { useContext} from 'react';
import styles from '../Repositories/repo.module.css'
import Github from '../Landing/media/github.png'
import { Button } from '@mui/material';
import { DataContext } from '../../DataContext/dataProvider'


export default function FavoriteCards({ repo }) {

  const value = useContext(DataContext)
    const [favorite, setFavorite] = value.favorite
    console.log(value.favorite)



  function Delete(event) {
    event.preventDefault()
    let favoritesDelete = favorite.filter( favorite => favorite.id !== repo.id);
      setFavorite([...favoritesDelete])
    }
    
  return (
    <div className={styles.main} key={repo.id}>
    <div className={styles.cardContainer}  >
      <div >
        <img className={styles.img} src={Github} alt="github" />
        <h5 className={styles.cardName} >Name: {repo.name}</h5>
        <h5 className={styles.cardAttack}>Language: {repo.language}</h5>
        <a className={styles.click} href={repo.url} target="_blank" rel="noreferrer"> Click here to open your repository </a>
        <br />  <br />
      <Button className={styles.button} variant="contained" color="error" onClick={Delete}> Delete </Button>
        </div>
        
      </div>
      
    </div>

  );

}


