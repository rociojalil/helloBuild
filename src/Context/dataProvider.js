import React, { createContext, useState} from "react";
export const DataContext = createContext();

export const DataProvider = (props) => {

	const [favorite,setFavorite] = useState([])
	
	
	const value = {
		favorite: [favorite, setFavorite]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};