import React, { useContext } from 'react';
import styles from './repo.module.css';
// import Github from '../images/github.png'
import { Button } from 'react-bootstrap'
import { DataContext } from "../../Context/dataProvider"


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
        <h5 >Name: {repo.name}</h5>
        <h5 >Language: {repo.language}</h5>
        <h5 >Default branch: {repo.defaultBranch}</h5>
        <h5 >Created: {repo.created}</h5>
        <h5> Visibility: {repo.visibility}</h5>
        <a href={repo.url}>
        <Button onClick={handleFavorite}> Favorite </Button>
          {/* <img id="img" src={Github} /> */}
        </a>
        </div>
        
      </div>
      
    </div>

  );
}