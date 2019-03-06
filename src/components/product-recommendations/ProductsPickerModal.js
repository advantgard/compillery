import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourcePicker } from "@shopify/polaris";

export const ProductsPickerModal = () => (
  <WidgetContext.Consumer>
    {({
      settings: { resourcePicker },
      methods: { handleSettingChange, handleResourceSelection }
    }) => (
      <ResourcePicker
        open={resourcePicker}
        resourceType="Product"
        showVariants={false}
        onCancel={() => handleSettingChange("resourcePicker", false)}
        onSelection={resources => handleResourceSelection(resources.selection)}
      />
    )}
  </WidgetContext.Consumer>
);
