import React from "react";
import { WidgetContext } from "./WidgetContext";
import { Page, Layout, Card, Tabs } from "@shopify/polaris";

const DashboardTabs = [
  {
    id: "products",
    content: "Products",
    accessibilityLabel: "Products",
    panelID: "dashboard-products"
  },
  {
    id: "theme",
    content: "Theme",
    accessibilityLabel: "Theme",
    panelID: "dashboard-theme"
  },
  {
    id: "recommendations",
    content: "Recommendations",
    accessibilityLabel: "Recommendations",
    panelID: "dashboard-recommendations"
  }
];

export const DashboardWidget = () => (
  <WidgetContext.Consumer>
    {({ settings: { currentTab }, methods: { handleSettingChange } }) => (
      <Page title="Product Recommendations" fullWidth={true}>
        <Card>
          <Tabs
            tabs={DashboardTabs}
            selected={currentTab}
            onSelect={selectedTabIndex => {
              handleSettingChange("currentTab", selectedTabIndex);
            }}
            fitted
          >
            <Card.Section>
              <Layout>
                <Layout.Section>

                </Layout.Section>
              </Layout>
            </Card.Section>
          </Tabs>
        </Card>
      </Page>
    )}
  </WidgetContext.Consumer>
);
