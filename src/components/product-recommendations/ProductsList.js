import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourceList } from "@shopify/polaris";

export const ProductsList = () => (
  <WidgetContext.Consumer>
    {({
      props: { products },
      settings: { selectedProductItems },
      methods: { handleRemoveSelectedProduct, handleSettingChange }
    }) => (
      <ResourceList
        resourceName={{ singular: "product", plural: "products" }}
        items={products}
        selectedItems={selectedProductItems}
        promotedBulkActions={[
          {
            content: "Remove from list",
            onAction: () => {
              handleRemoveSelectedProduct(selectedProductItems);
            }
          }
        ]}
        onSelectionChange={items => {
          handleSettingChange("selectedProductItems", items);
        }}
        renderItem={item => {
          const { id, title } = item;

          return (
            <ResourceList.Item id={id} url="#">
              <h3>{title}</h3>
            </ResourceList.Item>
          );
        }}
      />
    )}
  </WidgetContext.Consumer>
);
