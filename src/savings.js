import React from "react";
import Saving from './saving';
import './savings.css'
function Savings(){
    return(
        <>
        <p className="heading-3">Your Savings, Our priority</p>
    <div className="deal14">

        <div className="deals"> <Saving images='./hot-sale.png' datas='Handpicked Deals' des={'Carefully selected offers to ensure you get the best value'}/></div>
        <div className="deals"> <Saving images='./store.png' datas='Trusted Desi Stores' des={'Only the best desi stores with the highest quality products.'}/></div>
        <div className="deals"> <Saving images='./pin.png' datas='Easy Navigation' des={'User-friendly app design to make your shopping experience seamless.'}/></div>
        <div className="deals"> <Saving images='./star.png' datas='New Features' des={'Exciting new features like favorite shopping list with AI-generated deals, price lock and more.'}/></div>
    </div>
    </>
    )
}
export default Savings;