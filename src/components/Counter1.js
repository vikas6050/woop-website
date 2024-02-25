import React, { useState, useEffect } from 'react';

const Counter1 = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 5000; // 5 seconds
        const increment = endValue / duration; // Calculate increment per millisecond
        let startTime = null;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsedTime = timestamp - startTime;
            const newCount = Math.min(Math.round(elapsedTime * increment), endValue);
            setCount(newCount);

            if (elapsedTime < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);

        return () => setCount(0); // Reset count when unmounting
    }, [endValue]);

    return (
        <h2>{count.toLocaleString()}</h2> // Add commas for thousands separator
    );
};

export default Counter1;
