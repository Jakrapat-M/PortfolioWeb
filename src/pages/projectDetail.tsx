// ProjectDetailPage.tsx
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/projectCard";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // Fetch project details based on the id (you may use your data fetching logic)
  const projectDetails = projectData.find(
    (project) => project.id === Number(id)
  );

  return (
    <Center minHeight={"100vh"} id="project">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
          >
              
              
        <ProjectCard
          key={projectDetails!.id}
          id={projectDetails!.id}
          title={projectDetails!.title}
          description={projectDetails!.description}
          imageUrl={projectDetails!.imageUrl}
          tools={projectDetails!.tools}
        />
      </div>
    </Center>
  );
};

export default ProjectDetailPage;
