import Home from "./home";
import AboutMe from "./aboutMe";
import { Container } from "@mui/material";
import Education from "./education";
import ProjectPage from "./project";

const MainPage = () => {
  return (
    <Container>
      <Home />
      <AboutMe />
      <Education />
      <ProjectPage />
    </Container>
  );
};

export default MainPage;
