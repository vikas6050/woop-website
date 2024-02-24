import React from 'react';
import './banner.css'; // Import CSS file for styling


const Homepage = () => {
    return (
        <div className="homepage-container background-overlay">
            <h1 className='Header'>Making Marketing With Consumer Data, a force for Good</h1>
            <p>With a cookie-less future, collecting First-party-data is more important now than ever before. WOOP helps brands get highly profiled, highly engaged, and high-performing PII data more efficiently, and at scale. Every 5 minutes a consumer spends on WOOP helps generate funds that sponsor 5 minutes of school for a child in need.</p>
            <div className="counter">
                <h2>6,600,000</h2>
                <p>Women Signed Up</p>
            </div>
            <div className="counter">
                <h2>68,000,000</h2>
                <p>Profiling Points</p>
            </div>
            <div className="counter">
                <h2>4,500,000</h2>
                <p>Do Good Actions Funded*</p>
            </div>
            <button className="get-in-touch-btn" >Get in Touch</button>
        </div>
    );
};

export default Homepage;
