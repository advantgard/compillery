import { createContext } from "react";

export const WidgetContext = createContext({
  settings: {
    productsPickerModalOpen: false,
    tileEditorModalOpen: false,
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
    tiles: [],
    selectedTiles: []
  },
  theme: {
    buttonColor: {
      hue: 168,
      saturation: 0.79,
      brightness: 0.48
    }
  },
  methods: {
    handleResourceSelection: () => {},
    handleTileSelection: () => {},
    handleAddTile: () => {},
    handleLoadTile: () => {},
    handleEditTile: () => {},
    handleMoveTile: () => {},
    handleRemoveTile: () => {},
    handleSettingChange: () => {},
    handleSingleStateChange: () => {},
    handleRemoveProduct: () => {},
    handleMoveProduct: () => {}
  }
});
