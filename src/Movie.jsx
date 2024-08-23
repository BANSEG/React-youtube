import React, {createContext, useState}  from 'react';


export const Movie = createContext();

const MovieContext = ({children}) => {
    const [movie, setMovie] = useState([])
    const [searchKey, setSearchKey] = useState('')
    const [selectedMovie, setSelectedMovie] = useState('')


    
  return (
    <Movie.Provider value={{movie, setMovie, searchKey, setSearchKey, selectedMovie, setSelectedMovie}}>
        {children}
    </Movie.Provider>
  )
}

export default MovieContext