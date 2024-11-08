import React, { useEffect, useRef } from 'react';
import Item from './item';
import './items.css';

function Items() {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                
                if (scrollLeft + clientWidth >= scrollWidth) {
                    // If reached end, scroll back to start
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Otherwise, scroll to the next item
                    scrollContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
                }
            }
        }, 2000); // Scroll every 2 seconds

        return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
            <p className="cat">Categories Available</p>
            <div className="categories" ref={scrollContainerRef}>
                <div className="items"><Item image="/grocery.png" title="Groceries" /></div>
                <div className="items"><Item image="/vegetable.png" title="Vegetables" /></div>
                <div className="items"><Item image="/fruits.png" title="Fruits" /></div>
                <div className="items"><Item image="/dairy-products.png" title="Dairy Products" /></div>
                <div className="items"><Item image="/barbecue.png" title="Meat" /></div>
                <div className="items"><Item image="/candy.png" title="Sweets" /></div>
                <div className="items"><Item image="/burger.png" title="Food" /></div>
                <div className="items"><Item image="/bakery.png" title="Bakery" /></div>
            </div>
        </>
    );
}

export default Items;
