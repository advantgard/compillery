import React from "react";
import { WidgetContext } from "./WidgetContext";
import {
  TextField,
  FormLayout,
  OptionList,
  Scrollable,
  Modal,
  AppProvider
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

export const TilesEditorModal = () => (
  <WidgetContext.Consumer>
    {({
      settings: {
        tileEditorModalOpen,
        currentTileLabel,
        currentTileId,
        recommendationProductPicker
      },
      props: { tiles },
      methods: { handleSettingChange, handleAddTile, handleEditTile }
    }) => (
      <AppProvider>
        <Modal
          large
          open={tileEditorModalOpen}
          onClose={() => {
            handleSettingChange("tileEditorModalOpen", false);
          }}
          title={`${currentTileId ? "Edit" : "Add"} Tile`}
          primaryAction={{
            content: `${currentTileId ? "Edit" : "Add"} Tile`,
            onAction() {
              const tile = {
                label: currentTileLabel,
                recommendation: {
                  id: recommendationProductPicker.value,
                  name: recommendationProductPicker.label,
                  weight: 100
                }
              };

              if (currentTileId) {
                tile.id = currentTileId;
                handleEditTile(tile);
              } else {
                tile.id = Math.floor(Math.random() * 9999);
                handleAddTile(tile);
              }
            }
          }}
        >
          <Modal.Section>
            <FormLayout>
              <FormLayout.Group>
                <TextField
                  label="Tile Label"
                  value={currentTileLabel}
                  onChange={newLabel => {
                    handleSettingChange("currentTileLabel", newLabel);
                  }}
                  readOnly={false}
                  helpText="This is the label that appears on the tile"
                />
              </FormLayout.Group>
              <RecommendedProductPicker />
            </FormLayout>
          </Modal.Section>
        </Modal>
      </AppProvider>
    )}
  </WidgetContext.Consumer>
);
