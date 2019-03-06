import React from "react";
import { Page, Layout, Card } from "@shopify/polaris";

export const DashboardWidget = () => (
  <Page title="Product Recommendations" fullWidth={true}>
    <Layout>
      <Layout.Section oneHalf>
        <Card title="Options">
          <Card.Section title="Images" />
          <Card.Section title="Add Products" />
          <Card.Section />
        </Card>
      </Layout.Section>
      <Layout.Section oneHalf>
        <Card title="Sections">
          <Card.Section />
          <Card.Section />
        </Card>
      </Layout.Section>
    </Layout>
  </Page>
);
