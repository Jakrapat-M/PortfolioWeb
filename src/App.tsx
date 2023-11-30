import "./App.css";
import Navbar from "./components/navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import MainPage from "./pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetailPage from "./pages/projectDetail";

function App() {
  const themeMUI = createTheme({
    palette: {
      primary: {
        main: theme.colors.blue[100],
      },
    },
  });
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={themeMUI}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/project/:id" Component={ProjectDetailPage} />
          </Routes>
        </ThemeProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
