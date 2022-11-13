import React from "react";
import "../style/Home.css";
import "../style/Products.css";
import { useStateValue } from "./StateProvider";

const Products = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  console.log("장바구니 확인", basket);

  return (
    <div className="product">
      <img src={image} alt="" />

      <div className="product_info">
        <span className="product_name">{title}</span>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>

        <span className="product_price">
          <small>가격</small>
          <strong>{price}</strong>
          <small>원</small>
        </span>
      </div>

      <button>장바구니</button>
    </div>
  );
};

export default Products;
