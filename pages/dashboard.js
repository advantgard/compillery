import { DashboardWidget } from "../src/components/product-recommendations/DashboardWidget";
import { ProductRecommendations } from "../src/components/product-recommendations/ProductRecommendations";
import { WidgetContext } from "../src/components/product-recommendations/WidgetContext";
import { Recommendation } from "../src/components/product-recommendations/Recommendation";
import { deleteObjectFromArrayById } from "../src/components/product-recommendations/Utils";

class Dashboard extends React.Component {
  handleResourceSelection = resources => {
    let props = this.state.props;
    props.resourcePicker = false;
    props.products = resources;
    this.setState({ props });
  };

  handleTileSelection = tile => {
    let props = this.state.props;
    props = { ...props, ...Recommendation(props, tile) };
    this.setState({ props });
  };

  handleAddTile = tile => {
    let props = this.state.props;
    let settings = this.state.settings;
    props.tiles.push(tile);
    settings.currentTileLabel = "";
    settings.recommendationProductPicker = [];
    this.setState({ props, settings });
  };

  handleLoadTile = tile => {
    let settings = this.state.settings;
    settings.currentTileLabel = tile.label;
    settings.currentTileId = tile.id;
    settings.recommendationProductPicker = {
      value: tile.recommendation.id,
      label: tile.recommendation.name
    };
    this.setState({ settings });
  };

  handleEditTile = tile => {
    let props = this.state.props;
    let settings = this.state.settings;
    const index = props.tiles.findIndex(
      currentTile => currentTile.id === tile.id
    );
    if (index >= 0) {
      props.tiles[index] = tile;
      settings.currentTileId = null;
      settings.currentTileLabel = "";
      settings.recommendationProductPicker = {};
      this.setState({ props, settings });
    }
  };

  handleMoveTile = tile => {
    let props = this.state.props;
    const tileIndex = props.tiles.findIndex(
      currentTile => currentTile.id === tile.id
    );
    if (tileIndex > 0) {
      const temp = props.tiles[tileIndex - 1];
      props.tiles[tileIndex - 1] = props.tiles[tileIndex];
      props.tiles[tileIndex] = temp;
      this.setState({ props });
    }
  };

  handleRemoveTile = tile => {
    let props = this.state.props;
    deleteObjectFromArrayById(props.tiles, tile.id);
    this.setState({ props });
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
      resourcePicker: false,
      selectedProductItems: [],
      currentTab: 0,
      currentTileLabel: "",
      currentTileId: null,
      recommendationProductPicker: {}
    },
    props: {
      aspectRatio: "16-9",
      headerLabel: "",
      active: null,
      recommendation: null,
      products: [],
      selectedTiles: [],
      tiles: []
    },
    theme: {
      buttonColor: {
        hue: 168,
        saturation: 0.79,
        brightness: 0.48
      }
    },
    methods: {
      handleResourceSelection: this.handleResourceSelection,
      handleTileSelection: this.handleTileSelection,
      handleAddTile: this.handleAddTile,
      handleLoadTile: this.handleLoadTile,
      handleEditTile: this.handleEditTile,
      handleMoveTile: this.handleMoveTile,
      handleRemoveTile: this.handleRemoveTile,
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
