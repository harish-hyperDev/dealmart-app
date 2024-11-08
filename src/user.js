import React from 'react';
import './user.css';
function User ({head,para1,para2}){
   return(
   <>
   <div className='reviews'>
      <p className='head'>{head}</p>
   <p className='para'>{para1}</p>
   <p className='para'>{para2}</p>
   </div>
</>
   )
}
export default User;