import { EmptyState, Layout, Page, TextStyle } from "@shopify/polaris";

const Index = () => (
  <Page
    primaryAction={{
      content: "Select products"
    }}
  >
    <Layout>
      <EmptyState
        heading="Discount your products temporarly"
        action={{
          content: "Select products",
          onAction: () => console.log("clicked")
        }}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        <p>Select the products you want to change the price temproarly</p>
      </EmptyState>
    </Layout>
  </Page>
);

export default Index;
