import { Center, Container, useColorModeValue } from "@chakra-ui/react";
import { Box, Typography } from "@mui/material";
import React from "react";

interface EducationBoxProps {
  type: string;
  university: string;
  program: string;
  year: string;
}

const educationData = [
  {
    type: "High School",
    university: "Debsirin School",
    program: "Intensive English Program ( IEP )",
    year: "2017 - 2020",
  },
  {
    type: "University",
    university: "King Mongkut’s University of Technology Thonburi ( KMUTT )",
    program: "Computer Science",
    year: "2020 - present",
  },

  // Add more education history objects as needed
];

const EducationBox = ({
  type,
  university,
  program,
  year,
}: EducationBoxProps) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.01)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        marginRight: "20px", // Add some margin to separate boxes
      }}
    >
      <Typography variant="h5" color={useColorModeValue("#dd0000", "#dd0000")}>
        {type}
      </Typography>
      <Typography variant="h5">{university}</Typography>
      <Typography variant="body1" gutterBottom>
        {program}
      </Typography>
      <Typography variant="body2">{year}</Typography>
    </Box>
  );
};

const Education = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <div style={{ display: "flex" }}>
          {educationData.map((education, index) => (
            <React.Fragment key={index}>
              <EducationBox
                type={education.type}
                university={education.university}
                program={education.program}
                year={education.year}
              />
              {index < educationData.length - 1 && (
                <Center>
                  <div
                    className="arrow-connector"
                    style={{
                      width: "20px",
                      height: "0",
                      borderBottom: "5px solid transparent",
                      borderTop: "5px solid transparent",
                      borderLeft: "5px solid #888", // Arrow color
                    }}
                  ></div>
                </Center>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Education;
