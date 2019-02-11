import { Page, Layout, ResourcePicker, ChoiceList } from "@shopify/polaris";
import { ProductItems } from "../src/components/product-recommendations/ProductItems";

class Dashboard extends React.Component {
  state = {
    resourcePicker: false,
    aspectRatio: "square",
    selectedProducts: []
  };

  handleResourceSelection = resources => {
    console.log(resources.selection[0]);
    this.setState({
      resourcePicker: false,
      selectedProducts: resources.selection
    });
  };

  handleAspectRatioSelection = selection => {
    this.setState({
      aspectRatio: selection
    });
  };

  render() {
    return (
      <Page
        fullWidth={true}
        primaryAction={{
          title: "Product Recommendations",
          content: "Select products",
          onAction: () => this.setState({ resourcePicker: true })
        }}
      >
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
          <ChoiceList
            title="Product image aspect ratio"
            choices={[
              { label: "Square", value: "square" },
              { label: "Rectangle (16:9)", value: "16-9" }
            ]}
            selected={this.state.aspectRatio}
            onChange={this.handleAspectRatioSelection}
          />
        </Layout>
        <preview-frame>
          <div className="compillery-product-recommendations">
            <ProductItems
              items={this.state.selectedProducts}
              aspectRatio={this.state.aspectRatio}
            />
          </div>
        </preview-frame>
      </Page>
    );
  }
}

export default Dashboard;
