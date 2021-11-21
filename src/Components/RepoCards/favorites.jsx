import React, {useContext} from "react";
import styles from './repo.module.css';
import FavCard from './favCard';
import { DataContext } from '../../Context/dataProvider'

export default function Favorites() {
    const value = useContext(DataContext)
    const [favorite, setFavorite] = value.favorite

    return (
        
        <div className={styles.main}>
          <h1>HOLAAAAA</h1>
          {favorite && favorite?.map(repo=>{
            return <FavCard repo={repo}/>
          })}
        </div>
       
        
    )

}