import React, {useContext, useState} from 'react'
import { Movie } from '../Movie'

const Form = () => {
    const [film, setFilm] = useState('')
    let { mySearch, setSearchKey} = useContext(Movie);
    
    const [message, setMessage] = useState('')
  
    const prosper = (e) => {
        setSearchKey(film)
        e.preventDefault()
        setFilm('')
    }
    const checkValue = (e) => {
        setFilm(e.target.value)
    }
    console.log(message)
    // console.log(film)
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', alignItems: 'center', backgroundColor: '#0F0F0F', borderBottom: '1px solid #303030' }}>
            <div>
                <h1 style={{color: 'white'}}>Movie</h1>
            </div>
            <form style={{ display: 'flex', gap: '20px' }} onSubmit={prosper}>
                <input value={film} onChange={checkValue} type="text" placeholder='Search your movie here' />
                <input type="submit" value="Search" />
            </form>
            
        </div>

       
    )
}

export default Form