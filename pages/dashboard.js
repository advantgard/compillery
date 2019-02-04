import {
  EmptyState,
  Layout,
  Page,
  ResourceList,
  ResourcePicker,
  TextStyle
} from "@shopify/polaris";

class Dashboard extends React.Component {
  state = {
    resourcePicker: false,
    selectedProducts: {}
  };

  handleResourceSelection = resources => {
    console.log(resources.selection);
    this.setState({
      resourcePicker: false,
      selectedProducts: resources.selection
    });
  };

  render() {
    return (
      <Page title="Product Recommendations">
        <ResourcePicker
          open={this.state.resourcePicker}
          resourceType="Product"
          showVariants={false}
          onCancel={() => {
            this.setState({ resourcePicker: false });
          }}
          onSelection={resources => this.handleResourceSelection(resources)}
        />
        <Layout>
          <EmptyState
            heading="Recommend featured products"
            action={{
              content: "Select Products",
              onAction: () => this.setState({ resourcePicker: true })
            }}
            image=""
          >
            <p>Select the products you want to change the price temproarly</p>
          </EmptyState>
          <ResourceList
            resourceName={{ singular: "product", plural: "products" }}
            items={this.state.selectedProducts}
            renderItem={item => {
              const { id, title, url } = item;
              return (
                <ResourceList.Item
                  url={url}
                  id={id}
                  accessibilityLabel={`View details for ${title}`}
                >
                  <h3>
                    <TextStyle variation="strong">{title}</TextStyle>
                  </h3>
                </ResourceList.Item>
              );
            }}
          />
        </Layout>
      </Page>
    );
  }
}

export default Dashboard;
