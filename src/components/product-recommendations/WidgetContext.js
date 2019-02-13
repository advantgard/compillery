import { createContext } from "react";

export const WidgetContext = createContext({
    props: {
        props: {
            resourcePicker: false,
            aspectRatio: "16-9",
            title: "",
            products: []
        },
        methods: {
            handleResourceSelection: () => {},
            handleResourceToggle: () => {},
            handleAspectRatioSelection: () => {},
            handleTitleChange: () => {}
        }
    }
});
