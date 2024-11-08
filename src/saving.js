import React from 'react';
import './saving.css';
function Saving({images,datas,des}){
    return(
       <>
       <img className='images'src={images} alt={datas}></img>
       <div className='desc'>
       <p className='datas'>{datas}</p>
       <p className='des'>{des}</p>
       </div>
       </>
     
    )
}    
export default Saving;