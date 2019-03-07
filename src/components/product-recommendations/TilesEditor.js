import React from "react";
import { WidgetContext } from "./WidgetContext";
import {
  TextField,
  FormLayout,
  Button,
  OptionList,
  Scrollable
} from "@shopify/polaris";

const RecommendedProductPicker = () => (
  <WidgetContext.Consumer>
    {({
      settings: { recommendationProductPicker },
      props: { products },
      methods: { handleSettingChange }
    }) => {
      const filteredProductsData = products.map(product => {
        return { value: product.id, label: product.title };
      });
      return (
        <Scrollable shadow style={{ maxHeight: "200px" }}>
          <OptionList
            title="Recommends product:"
            selected={recommendationProductPicker.value || []}
            onChange={newValue => {
              const index = filteredProductsData.findIndex(
                item => item.value === newValue.toString()
              );
              const newData = {
                value: newValue,
                label: filteredProductsData[index].label
              };
              handleSettingChange("recommendationProductPicker", newData);
            }}
            options={filteredProductsData}
          />
        </Scrollable>
      );
    }}
  </WidgetContext.Consumer>
);

export const TilesEditor = () => (
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
            }
          />
        </FormLayout.Group>
        <RecommendedProductPicker />
        <Button
          onClick={() => {
            handleSettingChange("resourcePicker", true);
          }}
        >
          Add Products
        </Button>
      </FormLayout>
    )}
  </WidgetContext.Consumer>
);
