import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { ThemeProvider, createTheme, useTheme } from "@mui/material";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import MainPage from "./pages/main";

function App() {
  const themeMUI = createTheme({
    palette: {
      primary: {
        main: theme.colors.blue[100],
      },
    },
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={themeMUI}>
          <Navbar />
          <MainPage />
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
