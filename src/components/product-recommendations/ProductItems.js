import React from "react";
import { ProductItem } from "./ProductItem";

function renderItems(items) {
  let renderedItems = "No products selected";
  if (items.length && Array.isArray(items)) {
    renderedItems = items.map(item => (
      <ProductItem
        key={item.variants[0].id}
        title={item.title}
        price={item.variants[0].price}
        url={ `/products/${item.handle}` }
      />
    ));
  }
  return renderedItems;
}

export const ProductItems = ({ items }) => {
  return (
    <div className="product-items">
      <div className="container">
        <div className={`grid`}>
          {renderItems(items)}
          <div className="u-break u-order--1"> </div>
          <div className="u-break u-order--3"> </div>
          <div className="u-break u-order--5"> </div>
        </div>
      </div>
    </div>
  );
};
