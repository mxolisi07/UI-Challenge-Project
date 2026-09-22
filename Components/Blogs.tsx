import React from "react";

interface BlogCardProps {
    title2: string;
    title3: string;
    image2: string;
    buttonText: string;

}

const BlogCard: React.FC<BlogCardProps> = ({title2, title3, image2, buttonText}) => {
    return (
        <div className="blog-drink-card">

             <img src={image2} alt= {title2} />
            <h3>{title2}</h3>
            <h6>{title3}</h6>
            <button>{buttonText}</button>
           
            
        </div>
    );
};

export default BlogCard;