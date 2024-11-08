import React from "react";
import Deal from './deal';
import './deals.css';

function Deals() {
    return (
        <>
            <p className="Deliver">Deliver Deals in Just a Few Steps</p>
            <div className="deal14">
                <div className="deals">
                    <Deal photo='./tag.png' data='Register for Free Trial' />
                    <p className="signup">Sign up on our app for a free 30-day free trial</p>
                </div>
                <div className="deals">
                    <Deal photo='./deal.png' data='Browse Deals for Free' />
                    <p className="signup">Checkout the deals available for free</p>
                </div>
                <div className="deals">
                    <Deal photo='./salary.png' data='Enjoy your Savings' />
                    <p className="signup">Purchase the items in your shopping list at your favorite desi stores to save money</p>
                </div>
                <div className="deals">
                    <Deal photo='./opt-in.png' data='Choose Subscription' />
                    <p className="signup">Pick a subscription plan to access advanced features like shopping list, favorites, rewards program etc</p>
                </div>
            </div>
        </>
    );
}

export default Deals;
