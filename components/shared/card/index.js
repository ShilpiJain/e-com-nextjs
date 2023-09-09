import Image from "next/image";
import React from "react";
import styles from "./styles.css";

const IMAGE_BLOCK = [
  {
    title: "Autonomous Coder black unisex t-shirt",
    path: "https://devhero.shop/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-628bde7b2b37a.jpg?v=1",
    layout: "responsive",
    width: 100,
    height: 500,
    loading: "lazy",
    alt: "Picture of the author",
    key: 1,
    price:"₹ 4,962.00 INR",
    rating:"2"
  },
  {
    title: "Autonomous Coder black unisex t-shirt",
    path: "https://devhero.shop/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-628bde7b2b37a.jpg?v=2",
    layout: "responsive",
    width: 100,
    height: 500,
    loading: "lazy",
    alt: "Picture of the author",
    key: 2,
    price:"₹ 4,962.00 INR",
    rating:"2"
  },
  {
    title: "Autonomous Coder black unisex t-shirt",
    path: "https://devhero.shop/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-628bde7b2b37a.jpg?v=3",
    layout: "responsive",
    width: 100,
    height: 500,
    loading: "lazy",
    alt: "Picture of the author",
    key: 3,
    price:"₹ 4,962.00 INR",
    rating:"2"
  },
  {
    title: "Autonomous Coder black unisex t-shirt",
    path: "https://devhero.shop/cdn/shop/products/unisex-basic-softstyle-t-shirt-black-front-628bde7b2b37a.jpg?v=4",
    layout: "responsive",
    width: 100,
    height: 500,
    loading: "lazy",
    alt: "Picture of the author",
    key: 4,
    price:"₹ 4,962.00 INR",
    rating:"2"
  },
];
const Card = () => {
  return (
    <div className="continer">
      <h1>Autonomous Coder Collection</h1>
      <p>
        Boost your coding efficiency with our Autonomous Coder collection. Our
        products are engineered to enhance focus and optimize workflow.
      </p>
      <div className="flexBox">
        {IMAGE_BLOCK.map(
          ({ path, layout, width, height, loading, alt, key, title, price, rating }) => {
            return (
              <div className={`imageCard ${key}`} key={key}>
                <Image
                  src={path}
                  layout={layout}
                  width={width}
                  height={height}
                  loading={loading}
                  alt={alt}
                />
                <h2>{title}</h2>
                <div>{rating}</div>
                <div>{price}</div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Card;
