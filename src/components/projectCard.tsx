import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tools: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  tools,
}) => {
  const displayTools = tools.slice(0, 3); // Display only the first two tools

  return (
    <Link to={`/project/${id}`}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        cursor="pointer"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          height="200px"
          width="full"
          objectFit="cover"
        />
        <Box p="6">
          <Text fontWeight="bold" fontSize="xl" mb="2">
            {title}
          </Text>
          <Text color="gray.500">{description}</Text>
          <Stack direction="row" mt={4} spacing={1} overflow={"hidden"}>
            {displayTools.map((tool, index) => (
              <Box
                key={index}
                borderRadius={"full"}
                px={2}
                backgroundColor={"pink.300"}
                h={"full"}
                w={"fit-content"}
              >
                {tool}
              </Box>
            ))}
            {tools.length > 3 && (
              <Box
                borderRadius={"full"}
                px={2}
                backgroundColor={"pink.300"}
                h={"full"}
                w={"10"}
                textAlign={"center"}
              >
                ...
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;
