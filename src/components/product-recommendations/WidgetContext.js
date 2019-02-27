import { createContext } from "react";

export const WidgetContext = createContext({
    props: {
        props: {
            resourcePicker: false,
            aspectRatio: "16-9",
            title: "",
            products: [],
            buttonColor: {
                hue: 168,
                saturation: 0.79,
                brightness: 0.48
            }
        },
        methods: {
            handleResourceSelection: () => {},
            handleSingleStateChange: () => {}
        }
    }
});
