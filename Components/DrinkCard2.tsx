import React from "react";
import { FaThumbsUp } from "react-icons/fa"; 

interface DrinkCardProps2 {
    title2: string;
    image2: string;
    price: string;
    likes: number;
    buttonText: string;

}

const DrinkCard2: React.FC<DrinkCardProps2> = ({title2, image2, price, likes, buttonText}) => {
    return (
        <div className="drink-card2">
             <button id="btn"> <FaThumbsUp/> {likes + " Likes"}</button>
             <img className="image2" src={image2} alt= {title2} />
            <h3>{title2}</h3>
            <div id="footer-card">
                <h4>{price} </h4>
                <button>{buttonText}</button>
            </div>
            
        </div>
    );
};

export default DrinkCard2;