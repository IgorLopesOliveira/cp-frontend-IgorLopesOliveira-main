import React, { useState } from "react";
import Box from "./Box";

const SlideShow = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="slideshow">
            <h1 className="title">Hot Today</h1>
            <div className="slideshow-container">
                <button className="arrow left-arrow" onClick={handlePrev}>
                    &#8592;
                </button>
                <div className="slide">
                    {slides[currentIndex].map((box, index) => (
                        <Box key={index} {...box} />
                    ))}
                </div>
                <button className="arrow right-arrow" onClick={handleNext}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default SlideShow;
