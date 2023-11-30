// ProjectDetailPage.tsx
import { Center, Container, Grid } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "../components/projectCard";
import { projectData } from "../data/projectData";
import { Typography } from "@mui/material";

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
              <Typography variant="h4" gutterBottom>
                  Project Detail Page
              </Typography>
              
        {/* <ProjectCard
          key={projectDetails!.id}
          id={projectDetails!.id}
          title={projectDetails!.title}
          description={projectDetails!.description}
          imageUrl={projectDetails!.imageUrl}
          tools={projectDetails!.tools}
        /> */}
      </div>
    </Center>
  );
};

export default ProjectDetailPage;
