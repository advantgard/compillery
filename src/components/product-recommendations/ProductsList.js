import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourceList } from "@shopify/polaris";

export const ProductsList = () => (
  <WidgetContext.Consumer>
    {({ props: { products }, methods: { handleRemoveProduct, handleMoveProduct } }) => (
      <ResourceList
        resourceName={{ singular: "product", plural: "products" }}
        items={products}
        renderItem={item => {
          const { id, title } = item;

          return (
            <ResourceList.Item
              id={id}
              url="#"
              shortcutActions={[
                { content: "Move up", onAction: () => handleMoveProduct(id) },
                { content: "Remove", onAction: () => handleRemoveProduct(id) }
              ]}
              persistActions
            >
              <h3>{title}</h3>
            </ResourceList.Item>
          );
        }}
      />
    )}
  </WidgetContext.Consumer>
);
