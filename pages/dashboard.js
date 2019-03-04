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

  handleSingleStateChange = (key, value) => {
    let props = this.state.props;
    if(props.hasOwnProperty(key)) {
      props[key] = value;
      this.setState({props});
    }
  };

  state = {
    props: {
      resourcePicker: false,
      aspectRatio: "16-9",
      title: "",
      products: [],
      tiles: [
        {
          id: 11,
          label: "Recommends 1",
          recommendation: {
            id: 1,
            weight: 100
          }
        },
        {
          id: 22,
          label: "Recommends 3",
          recommendation: {
            id: 3,
            weight: 300
          }
        },
        {
          id: 33,
          label: "Recommends 3",
          recommendation: {
            id: 3,
            weight: 300
          }
        },
        {
          id: 44,
          label: "Recommends 2",
          recommendation: {
            id: 2,
            weight: 200
          }
        }
      ],
      buttonColor: {
        hue: 168,
        saturation: 0.79,
        brightness: 0.48
      }
    },
    selectedTiles: [],
    methods: {
      handleResourceSelection: this.handleResourceSelection,
      handleSingleStateChange: this.handleSingleStateChange
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
