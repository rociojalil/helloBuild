import React, { createContext, useState} from "react";
export const DataContext = createContext();

export const DataProvider = (props) => {

	const [favorite, setFavorite] = useState([])
	
	
	const value = {
		favorite: [favorite, setFavorite]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};

// export const addFav = ({ repo }) => {
// 	// TODO: Duplicate Handling
// 	const favs = JSON.parse(window.localStorage.getItem('favs')) || []
  
// 	const ids = favs.map(fav => fav.id).includes(repo.id)
  
// 	if (!ids.includes(repo.id)) {
// 	  favs.push(repo)
// 	  window.localStorage.setItem('favs', JSON.stringify(favs))
// 	}
//   }
  
//   export const getFavs = () => JSON.parse(window.localStorage.getItem('favs')) || []
  
//   export const deleteFav = ({ repo }) => {
// 	const favs = JSON.parse(window.localStorage.getItem('favs')) || []
// 	const newFavs = favs.filter(fav => fav.id !== card.id)
// 	window.localStorage.setItem('favs', JSON.stringify(newFavs))
//   }
  