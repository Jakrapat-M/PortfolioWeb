import { Container, Grid } from "@chakra-ui/react";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/projectCard";

const ProjectPage = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container minHeight={"100vh"} id="project">
        <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tools={project.tools}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectPage;
