import React from "react";


const Banner: React.FC = () => {
    return (
        <section className= "banner">
            <svg className="svg-defs" width="0" height="0">
                <defs>
                    <clipPath id="wave-path" clipPathUnits="objectBoundingBox">
                        <path d= "M 0,0.10 C 0.2,0.20 0.7,-0.2 1,0.12 L 1,0.85 C 0.5,0.6 0.3,1.1 0,0.90 Z" />
                    </clipPath>
                </defs>
            </svg>

            <div className= "banner-content">
                <h2>FRESHLY ROASTED</h2>
                <h1>COFFEE</h1>
                <button className= "shop-btn">Shop now</button>
            </div>
        </section>
    )
}
export default Banner;
