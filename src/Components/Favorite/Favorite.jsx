import React, {useContext} from "react";
import styles from '../Repositories/repositorie.module.css';
import FavoriteCards from './CardFavoritos';
import { DataContext } from '../../DataContext/dataProvider'

export default function Favorites() {
  
  const value = useContext(DataContext)
  const [favorite, setFavorite] = value.favorite
  console.log(favorite)

  return (
    
    <div className={styles.main}>
          {favorite && favorite?.map(repo=>{
            return <FavoriteCards repo={repo} key={repo.id}/>
          })}
        </div>
       
        
    )

}