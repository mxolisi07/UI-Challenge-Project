import React from "react";

interface DrinkCardProps {
    title: string;
    image: string;
    imageSize?: 60;
    link?: string;

}

const DrinkCard: React.FC<DrinkCardProps> = ({title, image, link}) => {
    return (
        <div className="drink-card" style={{backgroundImage: `url(${image})`}}>
            <h3>{title}</h3>
            <p>{link}</p>
        </div>
    );
};

export default DrinkCard;