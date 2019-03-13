import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourcePicker } from "@shopify/polaris";

export const ProductsPickerModal = () => (
  <WidgetContext.Consumer>
    {({
      settings: { productsPickerModalOpen },
      methods: { handleSettingChange, handleResourceSelection }
    }) => (
      <ResourcePicker
        open={productsPickerModalOpen}
        resourceType="Product"
        showVariants={false}
        onCancel={() => handleSettingChange("productsPickerModalOpen", false)}
        onSelection={resources => handleResourceSelection(resources.selection)}
      />
    )}
  </WidgetContext.Consumer>
);
