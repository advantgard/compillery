import { DashboardWidget } from "../src/components/product-recommendations/DashboardWidget";
import { ProductRecommendations } from "../src/components/product-recommendations/ProductRecommendations";
import { WidgetContext } from "../src/components/product-recommendations/WidgetContext";

class Dashboard extends React.Component {
  handleResourceSelection = resources => {
    let props = this.state.props;
    props.resourcePicker = false;
    props.products = resources;
    this.setState({props});
  };

  handleResourceToggle = value => {
    let props = this.state.props;
    props.resourcePicker = value;
    this.setState({ props });
  };

  handleAspectRatioSelection = value => {
    let props = this.state.props;
    props.aspectRatio = value;
    this.setState({ props });
  };

  handleTitleChange = newTitle => {
    let props = this.state.props;
    props.title = newTitle;
    this.setState({ props });
  };

  state = {
    props: {
      resourcePicker: false,
      aspectRatio: "16-9",
      title: "",
      products: []
    },
    methods: {
      handleResourceSelection: this.handleResourceSelection,
      handleResourceToggle: this.handleResourceToggle,
      handleAspectRatioSelection: this.handleAspectRatioSelection,
      handleTitleChange: this.handleTitleChange
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
