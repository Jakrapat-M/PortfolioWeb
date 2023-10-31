import Home from "./home";
import AboutMe from "./aboutMe";
import { Container } from "@mui/material";
import Education from "./education";

const MainPage = () => {
  return (
    <Container>
      <Home />
      <AboutMe />
      <Education />
    </Container>
  );
};

export default MainPage;
