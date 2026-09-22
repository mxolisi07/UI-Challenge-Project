// src/Sections.tsx
import React from "react";
import DrinkCard from "./DrinkCard";
import DrinkCard2 from "./DrinkCard2";
import BlogCard from "./Blogs";


const Sections: React.FC = () => {
  return (
    <div className="sections">
      {/* Top Categories */}
      <section>
        <h2>TOP CATEGORIES</h2>
        <p>Explore The Recent Most Bought Drinks This Week</p>
        <div className="card-grid">
          <DrinkCard title="Coffee Mocha" image="./mochaCoffee.jpg" link="View More" />
          <DrinkCard title="Expresso Americano" image="./expressoAmericano.jpg" link="View More" />
          <DrinkCard title="Cappuccino" image="./Cappuccino.jpg" link="View More" />

        </div>
      </section>

      {/* Top Milk Shakes */}
      <section>
        <h2 className="top-shakes">TOP MILK SHAKES</h2>
        <p>Explore The Recent Most Bought Shakes This Week</p>
        <div className="card-grid2">
          <DrinkCard2 image2="/mochaShake.jpg" title2="Mocha Shake" price="$20.00" likes={156} buttonText="BUY NOW" />
          <DrinkCard2 image2="/lavenderShake.jpg" title2="Lavender Shake" price="$20.00" likes={108} buttonText="BUY NOW" />
          <DrinkCard2 image2="/caramelShake.jpg" title2="Caramel Shake" price="$20.00" likes={305} buttonText="BUY NOW" />
          <DrinkCard2 image2="/oreoShake.jpg" title2="Oreo Shake" price="$20.00" likes={255} buttonText="BUY NOW" />
          <DrinkCard2 image2="/vanillaShake.jpg" title2="Vanilla Shake" price="$20.00" likes={135} buttonText="BUY NOW" />
          <DrinkCard2 image2="/strawberryShake.jpg" title2="Strawberry Shake" price="$20.00" likes={326} buttonText="BUY NOW" />
        </div>
      </section>

       <section>
        <h2 className="top-shakes">LATEST BLOGS</h2>
        <p>Explore The Recent Most Bought Shakes This Week</p>
        <div className="blog-card-grid">
          <BlogCard image2="/onePerson.jpg" title2="Coffee Connoisseur" title3="Lorem ipsum dolor sit amet consectetur adipiscing elit non. Amet non sint distinctio qui et eligendi reprehenderit. Quo odio libero et et corrupti ex minus sed. Omnis similique cupidatat quod dolor adipiscing optio exercitation quidem quis blanditiis non qui." buttonText="Read More" />
          <BlogCard image2="/groupWork.jpg" title2="Coffee Connoisseur" title3="Lorem ipsum dolor sit amet consectetur adipiscing elit non. Amet non sint distinctio qui et eligendi reprehenderit. Quo odio libero et et corrupti ex minus sed. Omnis similique cupidatat quod dolor adipiscing optio exercitation quidem quis blanditiis non qui." buttonText="Read More" />
          <BlogCard image2="/teamWork.jpg" title2="Coffee Connoisseur" title3="Lorem ipsum dolor sit amet consectetur adipiscing elit non. Amet non sint distinctio qui et eligendi reprehenderit. Quo odio libero et et corrupti ex minus sed. Omnis similique cupidatat quod dolor adipiscing optio exercitation quidem quis blanditiis non qui." buttonText="Read More" />
          
        </div>
      </section>

    </div>
  );
};

export default Sections;
