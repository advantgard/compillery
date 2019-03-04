import React from "react";
import { ProductItems } from "./ProductItems";
import { WidgetContext } from "./WidgetContext";
import { Tiles } from "./Tiles";

export const ProductRecommendations = () => (
  <WidgetContext.Consumer>
    {({ props: { title, tiles } }) => (
      <div className="compillery-product-recommendations">
        <h2 className="product-items__title">{title}</h2>
        <Tiles />
        <ProductItems />
      </div>
    )}
  </WidgetContext.Consumer>
);
