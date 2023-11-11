import { Center, Container, useColorModeValue } from "@chakra-ui/react";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

interface EducationBoxProps {
  type: string;
  university: string;
  program: string;
  year: string;
}

const educationData = [
  {
    type: "Primary School",
    university: "Debsirin School",
    program: "English Program ( EP )",
    year: "2014 - 2017",
  },
  {
    type: "High School",
    university: "Debsirin School",
    program: "Intensive English Program ( IEP )",
    year: "2017 - 2020",
  },
  {
    type: "University",
    university: "King Mongkut’s University of Technology Thonburi ( KMUTT )",
    program: "Computer Science ( International Program )",
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
        margin: "20px", // Add some margin to separate boxes
      }}
    >
      <Typography
        variant="h5"
        color={useColorModeValue("#dd0000", "#dd0000")}
        align="center"
        style={{ wordWrap: "break-word" }}
      >
        {type}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        style={{ wordWrap: "break-word" }}
      >
        {university}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        align="center"
        style={{ wordWrap: "break-word" }}
      >
        {program}
      </Typography>
      <Typography
        variant="body2"
        align="center"
        style={{ wordWrap: "break-word" }}
      >
        {year}
      </Typography>
    </Box>
  );
};

const Education = () => {
  return (
    <div
      id="education"
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
          <Grid justifyContent={"center"} alignContent={"center"} container>
            {educationData.map((education, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} md={5}>
                  <EducationBox
                    type={education.type}
                    university={education.university}
                    program={education.program}
                    year={education.year}
                  />
                </Grid>

                {index < educationData.length - 1 && (
                  <Center className="py-5 pl-4">
                    <div
                      className="arrow-connector"
                      style={{
                        width: "20px",
                        height: "0",
                        borderBottom: "5px solid transparent",
                        borderTop: "5px solid transparent",
                        borderLeft: "5px solid #888",

                        // Arrow color
                      }}
                    ></div>
                  </Center>
                )}
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Education;
