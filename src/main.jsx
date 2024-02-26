import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#E53E3E", // ProBau Red
    800: "#FFFFFF", // ProBau White
    700: "#323F4B", // ProBau Dark Gray
    600: "#F4F4F4", // ProBau Light Gray
    500: "#1E90FF", // ProBau Blue
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
