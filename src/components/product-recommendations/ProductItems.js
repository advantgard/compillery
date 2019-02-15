import React from "react";
import { ProductItem } from "./ProductItem";
import { chunkArray } from "./Utils";
import { WidgetContext } from "./WidgetContext";

const generateProductItems = (items, aspectRatio) =>
  items.map(product => (
    <ProductItem
      key={product.variants[0].id}
      title={product.title}
      price={product.variants[0].price}
      imgUrl={product.images[0].originalSrc}
      aspectRatio={aspectRatio}
      url={`/products/${product.handle}`}
    />
  ));

export const ProductItems = () => (
  <WidgetContext.Consumer>
    {({ props: { products, aspectRatio } }) => {
      let productItems = chunkArray(generateProductItems(products, aspectRatio), 4);
      return productItems.map((items, index) => (
          <div key={`row-${index}`} className="product-items__grid">
              {items}
              <div className="product-items__break--1"> </div>
              <div className="product-items__break--2"> </div>
              <div className="product-items__break--3"> </div>
          </div>
      ));
    }}
  </WidgetContext.Consumer>
);
