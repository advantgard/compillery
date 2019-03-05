import React from "react";
import { WidgetContext } from "./WidgetContext";
import {
  Page,
  Layout,
  Card,
  ResourceList,
  ResourcePicker,
  ChoiceList,
  TextField,
  ColorPicker,
  Button
} from "@shopify/polaris";

export const DashboardWidget = () => (
  <WidgetContext.Consumer>
    {({
      settings: { selectedProductItems },
      props: { resourcePicker, products, aspectRatio, title, buttonColor },
      methods: {
        handleResourceSelection,
        handleSingleStateChange,
        handleSettingChange,
        handleRemoveSelectedProduct
      }
    }) => (
      <Page title="Product Recommendations" fullWidth={true}>
        <ResourcePicker
          open={resourcePicker}
          resourceType="Product"
          showVariants={false}
          onCancel={() => handleSingleStateChange("resourcePicker", false)}
          onSelection={resources =>
            handleResourceSelection(resources.selection)
          }
        />
        <Layout>
          <Layout.Section oneHalf>
            <Card title="Options">
              <Card.Section title="Images">
                <ChoiceList
                  title="Product image aspect ratio"
                  choices={[
                    { label: "Square", value: "square" },
                    { label: "Landscape (16:9)", value: "16-9" }
                  ]}
                  selected={aspectRatio}
                  onChange={choice =>
                    handleSingleStateChange("aspectRatio", choice)
                  }
                />
              </Card.Section>
              <Card.Section title="Add Products">
                <Button
                  onClick={() =>
                    handleSingleStateChange("resourcePicker", true)
                  }
                >
                  Add Products
                </Button>
              </Card.Section>
              <Card.Section>
                <ResourceList
                  resourceName={{ singular: "product", plural: "products" }}
                  items={products}
                  selectedItems={selectedProductItems}
                  promotedBulkActions={[
                    {
                      content: "Remove from list",
                      onAction: () => {
                        handleRemoveSelectedProduct(selectedProductItems)
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
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card title="Sections">
              <Card.Section>
                <TextField
                  readOnly={false}
                  label="Promotion Title"
                  value={title}
                  onChange={title => handleSingleStateChange("title", title)}
                />
              </Card.Section>
              <Card.Section>
                <ColorPicker
                  color={buttonColor}
                  onChange={color =>
                    handleSingleStateChange("buttonColor", color)
                  }
                />
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    )}
  </WidgetContext.Consumer>
);
