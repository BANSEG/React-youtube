import React, { useContext } from 'react'
import { Movie } from '../Movie'

const Banner = () => {
    let {selectedMovie, setSelectedMovie} = useContext(Movie)
  return (
    <div style={{backgroundImage: `url(${selectedMovie?.snippet?.thumbnails?.high.url})`, height: '30vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <span>{selectedMovie?.snippet?.title}</span>
    </div>
  )
}

export default Banner