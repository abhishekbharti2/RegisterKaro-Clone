import { useState } from "react";
import '../styles/sliders.css'
import data from './data.json'

const sliders = data.sliders;

export default function Sliders() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + sliders.length) % sliders.length);
    };

    return (
        <div className="sliders-section">
            <h2>What people say about us</h2>
            <div className="sliders-carousel">
                <div className="sliders-card">
                    <p className="sliders-text">"{sliders[index].text}"</p>
                    <div className="sliders-author">
                        <img src={sliders[index].image} alt={sliders[index].name} className="author-img" />
                        <div>
                            <strong>{sliders[index].name}</strong>
                            <p>{sliders[index].position}</p>
                        </div>
                    </div>
                </div>
                <span> 
                    <button onClick={prevSlide} className="carousel-btn">←</button>
                    <button onClick={nextSlide} className="carousel-btn">→</button>
                </span>
            </div>
        </div>
    );
}
