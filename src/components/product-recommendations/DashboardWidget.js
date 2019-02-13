import React from "react";
import { WidgetContext } from "./WidgetContext";
import {
  Page,
  Layout,
  Card,
  ResourcePicker,
  ChoiceList,
  TextField
} from "@shopify/polaris";

export const DashboardWidget = () => (
  <WidgetContext.Consumer>
    {({
      props: { resourcePicker, aspectRatio, title },
      methods: {
        handleResourceSelection,
        handleResourceToggle,
        handleAspectRatioSelection,
        handleTitleChange
      }
    }) => (
      <Page
        title="Product Recommendations"
        fullWidth={true}
        primaryAction={{
          title: "Product Recommendations",
          content: "Select products",
          onAction: () => handleResourceToggle(true)
        }}
      >
        <ResourcePicker
          open={resourcePicker}
          resourceType="Product"
          showVariants={false}
          onCancel={() => handleResourceToggle(false)}
          onSelection={resources => handleResourceSelection(resources.selection)}
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
                  onChange={choice => handleAspectRatioSelection(choice)}
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
                  onChange={title => handleTitleChange(title)}
                />
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    )}
  </WidgetContext.Consumer>
);
