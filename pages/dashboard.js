import {
  Page,
  Layout,
  Card,
  ResourcePicker,
  ChoiceList,
  TextField
} from "@shopify/polaris";
import { ProductItems } from "../src/components/product-recommendations/ProductItems";

class Dashboard extends React.Component {
  state = {
    resourcePicker: false,
    aspectRatio: "16-9",
    title: "",
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

  handleTitleChange = newTitle => {
    this.setState({
      title: newTitle
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
          <Layout.Section oneHalf>
            <Card title="Options">
              <Card.Section title="Images">
                <ChoiceList
                  title="Product image aspect ratio"
                  choices={[
                    { label: "Square", value: "square" },
                    { label: "Rectangle (16:9)", value: "16-9" }
                  ]}
                  selected={this.state.aspectRatio}
                  onChange={this.handleAspectRatioSelection}
                />
              </Card.Section>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card title="Sections">
              <Card.Section>
                <TextField
                  label="Promotion Title"
                  value={this.state.title}
                  onChange={this.handleTitleChange}
                />
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
        <preview-frame>
          <h2>Preview</h2>
          <div className="compillery-product-recommendations">
            <h2 className="product-items__title">{this.state.title}</h2>
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
