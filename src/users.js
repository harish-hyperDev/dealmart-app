import React from 'react';
import User from './user';
import './users.css';
function Users(){
    return( 
 <>
 
<div className='container'>
<p className='wou'>What Our Users are Saying</p>
 <div className='rslide'>

 <div className='slide'><User  head='Sathvik' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Roop' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Chetan' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Ajaaib' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Pooja' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Sathvik' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Sathvik' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 <div className='slide'><User  head='Sathvik' para1='mississauga ON' para2={'Partnering with !Deal mart is significantly boosted my carrier.'}/></div>
 </div>
 </div>
 </>

    )
}
export default Users;