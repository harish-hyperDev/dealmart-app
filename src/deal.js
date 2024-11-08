import React from 'react';
import './deal.css'
function Deal({photo,data}){
    return(
    <>
     <img className='images'src={photo} alt={data}></img>
     <p className='data'>{data}</p>
    </>

    )
} 
export default Deal;