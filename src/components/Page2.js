import React from 'react';
import './page2.css'; // Import the CSS file for styling
import logo1 from "../Assests/preference.svg"


const Page2 = () => {
    return (
        <section>
            <div className="box-container">
                <div className="box">
                    <span><img src={logo1} alt="abcd" /></span>
                    <h1>Better Efficiency</h1>
                    <br />
                    <p>Upto 20% lower CPL</p>
                </div>
            </div>
        </section>
    );
};

export default Page2;