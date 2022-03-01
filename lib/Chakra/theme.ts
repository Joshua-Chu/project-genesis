import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            100: "#ECEFF4",
            200: "#4C566A",
            300: "#36454F",
            400: "#2E3440",
            500: "#88C0D0",
            600: "rgba(236, 239, 244,.8)",
            700: "rgba(46, 52, 64, .8)",
        },
    },

    fonts: {
        heading: "Lato, sans-serif",
        body: "Roboto, sans-serif",
    },

    fontSizes: {
        md: "2.67rem",
        lg: "4rem",
    },

    global: {
        styles: {
            html: {
                fontSize: "16px",
            },
        },
    },
});

export default theme;
