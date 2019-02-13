import React from "react";
import { ProductItems } from "./ProductItems";
import { WidgetContext } from "./WidgetContext";

export const ProductRecommendations = () => (
  <WidgetContext.Consumer>
    {({ props: { title } }) => (
      <div className="compillery-product-recommendations">
        <h2 className="product-items__title">{title}</h2>
        <ProductItems />
      </div>
    )}
  </WidgetContext.Consumer>
);
