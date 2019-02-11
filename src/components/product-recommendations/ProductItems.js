import React from "react";
import { ProductItem } from "./ProductItem";

function renderItems(items, aspectRatio) {
  let renderedItems = "No products selected";
  if (items.length && Array.isArray(items)) {
    renderedItems = items.map(item => (
      <ProductItem
        key={item.variants[0].id}
        title={item.title}
        price={item.variants[0].price}
        imgUrl={item.images[0].originalSrc}
        aspectRatio={aspectRatio}
        url={`/products/${item.handle}`}
      />
    ));
  }
  return renderedItems;
}

export const ProductItems = ({ items, aspectRatio }) => {
  return (
    <div className="product-items__container">
      <div className={`product-items__grid`}>
        {renderItems(items, aspectRatio)}
        <div className="product-items__break--1"> </div>
        <div className="product-items__break--2"> </div>
        <div className="product-items__break--3"> </div>
      </div>
    </div>
  );
};
