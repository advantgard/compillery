import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourcePicker } from "@shopify/polaris";

export const ProductsPickerModal = () => (
  <WidgetContext.Consumer>
    {({
      props: { resourcePicker },
      methods: { handleSingleStateChange, handleResourceSelection }
    }) => (
      <ResourcePicker
        open={resourcePicker}
        resourceType="Product"
        showVariants={false}
        onCancel={() => handleSingleStateChange("resourcePicker", false)}
        onSelection={resources => handleResourceSelection(resources.selection)}
      />
    )}
  </WidgetContext.Consumer>
);
