import { createContext } from "react";

export const WidgetContext = createContext({
  props: {
    resourcePicker: false,
    aspectRatio: "16-9",
    title: "",
    active: null,
    recommendation: null,
    products: [],
    tiles: [],
    selectedTiles: [],
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
    handleSingleStateChange: () => {}
  }
});
