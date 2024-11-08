import React from 'react';
import './customers.css'
function Customers(){
    return(
<>
<div className='cust'>
<div className='custleft'>
    <p className='p'>Unlock the best deals on desi groceries with !DealMart</p>
    <p className='psmall'>Start Your Daily Shopping with !DealMart</p>
</div>
<div className='custright'>
<p>Join the revolution in smart shopping and start saving today. Whether you're a customer looking for the best deals or a business aiming to reach more customers, !DealMart is your perfect partner.</p>
<div>
<p className='crp'>For Customers</p>
<p>From App Store or Google Play</p></div>

<div className='but'>
    <button className='but1'><div className='but11'><i class="fa-brands fa-apple"></i></div>Download on <br></br>App store</button>
    <button className='but1'><div className='but11'><i class="fa-brands fa-google-play"></i></div>Get it on <br></br>Google play</button>
</div>
</div>
</div>
</>
    )
}
export default Customers;