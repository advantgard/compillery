import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ChoiceList } from "@shopify/polaris";

export const AspectRatioSelector = () => (
  <WidgetContext.Consumer>
    {({ props: { aspectRatio }, methods: { handleSingleStateChange } }) => (
      <ChoiceList
        title="Product image aspect ratio"
        choices={[
          { label: "Square", value: "square" },
          { label: "Landscape (16:9)", value: "16-9" }
        ]}
        selected={aspectRatio}
        onChange={choice => handleSingleStateChange("aspectRatio", choice)}
      />
    )}
  </WidgetContext.Consumer>
);
