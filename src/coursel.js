import React from 'react';
import './coursel.css';

function BackgroundImageComponent() {
    return(
  <div className="background">
    <p className='heading'>Shop Smart,<br></br>Save big on Groceries</p>
    <p className='heading1'></p>
    <h1 className='heading-sm'>Install App</h1>
    <h1 className='heading-mm'>From App Store or Google play</h1>
    <div className='buttons'>
    <button class="btn btn-dark rounded-pill button">
    <div className='icon'><i class="fa-brands fa-apple"></i></div> Download on <br></br> App store
</button>
<button class="btn btn-dark rounded-pill button12">
    <div className='icon'><i class="fa-brands fa-google-play"></i></div> Get it on <br></br> Google play
</button>
</div>
  </div>
)};

export default BackgroundImageComponent;
