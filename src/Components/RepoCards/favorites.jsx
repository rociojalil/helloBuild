import React, {useContext} from "react";
import styles from './repositorie.module.css';
import FavCard from './favCard';
import { DataContext } from '../../Context/dataProvider'

export default function Favorites() {
  
  const value = useContext(DataContext)
  const [favorite, setFavorite] = value.favorite
  console.log(favorite)

  return (
    
    <div className={styles.main}>
          {favorite && favorite?.map(repo=>{
            return <FavCard repo={repo} key={repo.id}/>
          })}
        </div>
       
        
    )

}