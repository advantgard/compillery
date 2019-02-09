import {
  Page,
  ResourcePicker
} from "@shopify/polaris";
import { ProductItems } from "../src/components/product-recommendations/ProductItems";

class Dashboard extends React.Component {
  state = {
    resourcePicker: false,
    selectedProducts: []
  };

  handleResourceSelection = resources => {
    console.log(resources.selection[0]);
    this.setState({
      resourcePicker: false,
      selectedProducts: resources.selection
    });
  };

  render() {
    return (
      <Page primaryAction={{
          title: "Product Recommendations",
          content: "Select products",
          onAction: () => this.setState({ resourcePicker: true })
      }}>
        <ResourcePicker
          open={this.state.resourcePicker}
          resourceType="Product"
          showVariants={false}
          onCancel={() => {
            this.setState({ resourcePicker: false });
          }}
          onSelection={resources => this.handleResourceSelection(resources)}
        />
        <preview-frame>
          <div className="compillery-product-recommendations">
            <ProductItems items={this.state.selectedProducts} />
          </div>
        </preview-frame>
      </Page>
    );
  }
}

export default Dashboard;
