import React from 'react';
import { useParams } from 'react-router-dom';

const Video = () => {
    let { id } = useParams();
  return (
    <div>
    <iframe src={`https://youtube.com/embed/${id}`} frameborder="0" width='387' height='300'>
    </iframe>
    </div>
  )
}

export default Video