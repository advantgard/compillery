import { createContext } from "react";

export const WidgetContext = createContext({
  settings: {
    resourcePicker: false,
    selectedProductItems: []
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
    handleSettingChange: () => {},
    handleSingleStateChange: () => {},
    handleRemoveSelectedProduct: () => {}
  }
});
