import React from 'react';
import Counter1 from './Counter1'; // Ensure correct casing
import './banner.css'; // Import CSS file for styling

const Banner = () => {
    return (
        <div className="homepage-container background-overlay">
            <h1 className='Header'>Making Marketing With Consumer Data, a force for Good</h1>
            <p>With a cookie-less future, collecting First-party-data is more important now than ever before. WOOP helps brands get highly profiled, highly engaged, and high-performing PII data more efficiently, and at scale. Every 5 minutes a consumer spends on WOOP helps generate funds that sponsor 5 minutes of school for a child in need.</p>
            <div className="counter">
                <Counter1 endValue={6600000} />
                <p>Women Signed Up</p>
            </div>
            <div className="counter">
                <Counter1 endValue={68000000} />
                <p>Profiling Points</p>
            </div>
            <div className="counter">
                <Counter1 endValue={4500000} />
                <p>Do Good Actions Funded*</p>
            </div>
            <button className="get-in-touch-btn" >Get in Touch</button>
        </div>
    );
};

export default Banner;
