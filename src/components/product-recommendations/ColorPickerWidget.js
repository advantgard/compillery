import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ColorPicker } from "@shopify/polaris";

export const ColorPickerWidget = (currentColor, colorToChange) => (
  <WidgetContext.Consumer>
    {({ methods: { handleSingleStateChange } }) => (
      <ColorPicker
        color={currentColor}
        onChange={color => handleSingleStateChange(colorToChange, color)}
      />
    )}
  </WidgetContext.Consumer>
);
