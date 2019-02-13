import React from "react";
import { ProductItem } from "./ProductItem";
import { chunkArray } from "./Utils";
import { WidgetContext } from "./WidgetContext";

export const ProductItems = () => (
  <WidgetContext.Consumer>
    {({ props: { products, aspectRatio } }) => {
      if (products.length && Array.isArray(products)) {
        const rows = chunkArray(products, 4);
        return rows.map((itemsGroup, index) => (
          <div className="product-items__grid" key={`row-${index}`}>
            {itemsGroup.map(product => (
              <ProductItem
                key={product.variants[0].id}
                title={product.title}
                price={product.variants[0].price}
                imgUrl={product.images[0].originalSrc}
                aspectRatio={aspectRatio}
                url={`/products/${product.handle}`}
              />
            ))}
            <div className="product-items__break--1"> </div>
            <div className="product-items__break--2"> </div>
            <div className="product-items__break--3"> </div>
          </div>
        ));
      } else {
        return <div>No products selected</div>;
      }
    }}
  </WidgetContext.Consumer>
);
