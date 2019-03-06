import { DashboardWidget } from "../src/components/product-recommendations/DashboardWidget";
import { ProductRecommendations } from "../src/components/product-recommendations/ProductRecommendations";
import { WidgetContext } from "../src/components/product-recommendations/WidgetContext";
import { Recommendation } from "../src/components/product-recommendations/Recommendation";

class Dashboard extends React.Component {
  handleResourceSelection = resources => {
    let props = this.state.props;
    props.resourcePicker = false;
    props.products = resources;
    this.setState({ props });
  };

  handleTileSelection = tile => {
    let props = this.state.props;
    props = Recommendation(props, tile);
    this.setState(props);
  };

  handleSettingChange = (key, value) => {
    let settings = this.state.settings;
    if (settings.hasOwnProperty(key)) {
      settings[key] = value;
      this.setState({ settings });
    }
  };

  handleSingleStateChange = (key, value) => {
    let props = this.state.props;
    if (props.hasOwnProperty(key)) {
      props[key] = value;
      this.setState({ props });
    }
  };

  handleRemoveSelectedProduct = ids => {
    let props = this.state.props;
    let settings = this.state.settings;
    if (props.products) {
      ids.forEach(id => {
        props.products.splice(
          props.products.findIndex(item => {
            return item.id === id;
          }),
          1
        );
        settings.selectedProductItems = [];
      });
      this.setState({ props, settings });
    }
  };

  state = {
    settings: {
      selectedProductItems: []
    },
    props: {
      resourcePicker: false,
      aspectRatio: "16-9",
      title: "",
      active: null,
      recommendation: null,
      products: [],
      selectedTiles: [],
      tiles: [],
      buttonColor: {
        hue: 168,
        saturation: 0.79,
        brightness: 0.48
      }
    },
    methods: {
      handleResourceSelection: this.handleResourceSelection,
      handleTileSelection: this.handleTileSelection,
      handleSettingChange: this.handleSettingChange,
      handleSingleStateChange: this.handleSingleStateChange,
      handleRemoveSelectedProduct: this.handleRemoveSelectedProduct
    }
  };

  render() {
    return (
      <WidgetContext.Provider value={this.state}>
        <DashboardWidget />
        <ProductRecommendations />
      </WidgetContext.Provider>
    );
  }
}

export default Dashboard;
