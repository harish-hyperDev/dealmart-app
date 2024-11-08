import React from "react";
import './item.css'

function Item({image , title}){
    return(

       <>
       <div className="item-outer">
        <img className="img" src={image} alt={title}></img>
        <p className="titles"> {title}</p>
       </div>
       
       </>  

    )
}

export default Item;