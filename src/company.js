import React from 'react';
import './company.css';
function Company(){
    return(
<>
<div className='grp-div'>
<div className='div1'>
 
   <img className='div1-img' src='logo.png'></img>

   <p>Best deals from your favorite<br></br> desi stores, offering quality products at <br></br> unbeatable prices.</p>

</div>
<div className='div2'>
  <p className='div2-head'>Company</p>
   <p className='x-p'>About</p>
   <p className='x-p'>Privacy Policy</p>
   <p className='x-p'>FAQs</p>
   <p className='x-p'>Contact</p>
</div>
<div className='div3'>
<p className='div2-head'>Available In</p>

<p className='x-p'>Mississauga</p>
<p className='x-p'>Brampton</p>
<p className='x-p'>Malton</p>
<p className='x-p'>Toronto (Coming Soon)</p>
<p className='x-p'>Scarborough (Coming Soon)</p>


</div>
<div className='div4'>

<p className='div2-head'>Install App</p>
<p>From App Store or Google Play</p>
   
<div className='but'>
    <button className='but1'><div className='but11'><i class="fa-brands fa-apple"></i></div>Download on <br></br>App store</button>
    <button className='but1'><div className='but11'><i class="fa-brands fa-google-play"></i></div>Get it on <br></br>Google play</button>
</div>

</div>
</div>
</>
    )
}
export default Company;