import React, { useContext } from 'react';
import styles from './repo.module.css';
import Github from '../Landing/media/github.png'
import { DataContext } from "../../DataContext/dataProvider"
import { Button } from '@mui/material';
import swal from 'sweetalert';


export default function RepoCard({ repo }) {

  const value = useContext(DataContext)
  const [favorite, setFavorite] = value.favorite

  async function Favorite(event) {
    let favoritos = favorite.map( e => e.id).includes(repo.id)
    // acá se debe validar que no se agregue un repositorio que ya está en favoritos
    event.preventDefault()
    if(!favoritos){
      // acá se agrega el repositorio a favoritos
      let repoObj = {
        id: repo.id,
        name: repo.name,
        language: repo.language
    }
      setFavorite([...favorite, repoObj])
      // console.log(value.favorite);
      swal("Succes!", "Added to your favorites", "success")
    }
  }


  return (
    <div className={styles.main}>
    <div className={styles.cardContainer} key={repo.id}>
      <div >
        <img className={styles.img} src={Github} alt="github"/>
        <h5 className={styles.cardName} >Name: {repo.name}</h5>
        <h5 className={styles.cardAttack}>Language: {repo.language}</h5>
        <a className={styles.click} href={repo.url} target="_blank" rel="noreferrer"> Click here to open your repository </a>
          <br /> <br />
        <Button className={styles.button} variant="contained" color="success" onClick={Favorite}>Favorite</Button>
       
        </div>
        
      </div>
      
    </div>

  );
}