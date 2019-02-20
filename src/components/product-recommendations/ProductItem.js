import React from "react";
import { colorHSL } from "./Utils";

export const ProductItem = ({
  title,
  price,
  imgUrl,
  aspectRatio,
  url,
  action,
  buttonColor
}) => {
  return (
    <React.Fragment>
      <div className="product-item__image-container">
        <div
          className={`product-item__image-wrapper--${
            aspectRatio ? aspectRatio : "square"
          }`}
        >
          <a
            className="product-item__toggle"
            style={{ background: colorHSL(buttonColor) }}
            href="javascript:void(0)"
          >
            <span className="product-item__toggle-icon--expand" />
          </a>
          <img className="product-item__image" src={imgUrl} alt="" />
        </div>
      </div>
      <div className="product-item__tile-container">
        <div className={`product-item__title`}>{title}</div>
      </div>
      <div className="product-item__price-container">
        <div className={`product-item__price`}>{price}</div>
      </div>
      <div className="product-item__action-container">
        <a
          href={url}
          style={{
            background: colorHSL(buttonColor)
          }}
          className={`product-item__action`}
        >
          {action || "Add to Cart"}
        </a>
      </div>
    </React.Fragment>
  );
};
