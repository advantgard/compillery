import { DashboardWidget } from "../src/components/product-recommendations/DashboardWidget";
import { ProductRecommendations } from "../src/components/product-recommendations/ProductRecommendations";
import { WidgetContext } from "../src/components/product-recommendations/WidgetContext";
import { Recommendation } from "../src/components/product-recommendations/Recommendation";
import { deleteObjectFromArrayById, moveObjectFromArrayUp } from "../src/components/product-recommendations/Utils";

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
    settings.tileEditorModalOpen = false;
    this.setState({ props, settings });
  };

  handleLoadTile = tile => {
    let settings = this.state.settings;
    settings.currentTileLabel = tile.label;
    settings.currentTileId = tile.id;
    settings.tileEditorModalOpen = true;
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
      settings.tileEditorModalOpen = false;
      settings.recommendationProductPicker = {};
      this.setState({ props, settings });
    }
  };

  handleMoveTile = tile => {
    let props = this.state.props;
    moveObjectFromArrayUp(props.tiles, tile.id);
    this.setState({props});
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

  handleRemoveProduct = id => {
    let props = this.state.props;
    deleteObjectFromArrayById(props.products, id);
    this.setState({ props });
  };

  handleMoveProduct = id => {
    let props = this.state.props;
    moveObjectFromArrayUp(props.products, id);
    this.setState({ props });
  };

  state = {
    settings: {
      productsPickerModalOpen: false,
      tileEditorModalOpen: false,
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
      handleRemoveProduct: this.handleRemoveProduct,
      handleMoveProduct: this.handleMoveProduct
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
