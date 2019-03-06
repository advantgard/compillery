import React from "react";
import { WidgetContext } from "./WidgetContext";
import { TextField, FormLayout, Button, OptionList } from "@shopify/polaris";

const RecommendedProductPicker = () => (
  <WidgetContext.Consumer>
    {({
      settings: { recommendationProductPicker },
      props: { products },
      methods: { handleSettingChange }
    }) => (
      <OptionList
        title="Recommends product:"
        selected={recommendationProductPicker}
        onChange={newValue => {
          handleSettingChange("recommendationProductPicker", newValue);
        }}
        options={products.map(product => {
          return { value: product.id, label: product.title };
        })}
      />
    )}
  </WidgetContext.Consumer>
);

export const RecommendationEditor = () => (
  <WidgetContext.Consumer>
    {({
      settings: { recommendationLabel, recommendationProductPicker },
      props: { tiles },
      methods: { handleSettingChange, handleAddTile }
    }) => (
      <FormLayout>
        <FormLayout.Group>
          <TextField
            label="Tile Label"
            value={recommendationLabel}
            onChange={newLabel => {
              handleSettingChange("recommendationLabel", newLabel);
            }}
            readOnly={false}
            helpText="This is the label that appears on the tile"
            connectedRight={
              <Button
                onClick={() => {
                  handleAddTile({
                    id: tiles.length + 1,
                    label: recommendationLabel,
                    recommendation: { id: recommendationProductPicker, weight: 100 }
                  });
                }}
                disabled={!recommendationProductPicker.length}
              >
                Add Tile
              </Button>
            }
          />
        </FormLayout.Group>
        <RecommendedProductPicker />
        <Button
          onClick={() => {
            handleSettingChange("resourcePicker", true);
          }}
        >
          Add Product
        </Button>
      </FormLayout>
    )}
  </WidgetContext.Consumer>
);
