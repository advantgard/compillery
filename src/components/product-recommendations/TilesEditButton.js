import React from "react";
import { WidgetContext } from "./WidgetContext";
import { Button } from "@shopify/polaris";

export const addOrEdit = () => {

};

export const TilesEditButton = () => (
  <WidgetContext.Consumer>
    {({
      settings: { recommendationLabel, recommendationProductPicker },
      methods: { handleAddTile, handleEditTile }
    }) => (
      <Button
        onClick={() => {
          handleAddTile({
            id: Math.floor(Math.random() * 9999),
            label: recommendationLabel,
            recommendation: {
              id: recommendationProductPicker.value,
              name: recommendationProductPicker.label,
              weight: 100 * (tiles.length + 1)
            }
          });
        }}
        disabled={!Object.keys(recommendationProductPicker).length}
      >
        Add Tile
      </Button>
    )}
  </WidgetContext.Consumer>
);
