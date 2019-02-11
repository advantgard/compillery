import React from "react";

export const ProductItem = ({ title, price, imgUrl, aspectRatio, url, action }) => {
  return (
    <React.Fragment>
      <div className="product-item__image-container">
        <div className={ `product-item__image-wrapper--${aspectRatio ? aspectRatio : "square"}` } >
            <img className="product-item__image" src={imgUrl} alt=""/>
        </div>
      </div>
      <div className="product-item__tile-container">
        <div className={`product-item__title`}>{title}</div>
      </div>
      <div className="product-item__price-container">
        <div className={`product-item__price`}>{price}</div>
      </div>
      <div className="product-item__action-container">
        <a href={ url } className={`product-item__action`}>
          {action || "Add to Cart"}
        </a>
      </div>
    </React.Fragment>
  );
};
