import { Center, Container, useColorModeValue } from "@chakra-ui/react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

interface EducationBoxProps {
  university: string;
  program: string;
  year: string;
}

const educationData = [
  // {
  //   type: "Primary School",
  //   university: "Debsirin School",
  //   program: "English Program ( EP )",
  //   year: "2014 - 2017",
  // },
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
    year: "2020 - Present",
  },

  // Add more education history objects as needed
];

const EducationBox = ({ university, program, year }: EducationBoxProps) => {
  return (
    <Box
      sx={{
        padding: "20px",

        // Add some margin to separate boxes
      }}
    >
      <Grid container>
        <Grid item xs={12} md={4} textAlign="center" my={2}>
          <Center height="full">
            <Typography variant="h6" style={{ wordWrap: "break-word" }}>
              {year}
            </Typography>
          </Center>
        </Grid>
        <Grid item xs={12} md={7} textAlign="start" my={'auto'}>
          <Typography variant="body1" style={{ wordWrap: "break-word" }}>
            {university}
            <br />
            {program}
          </Typography>
        </Grid>
      </Grid>
      {/* <Typography
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
      </Typography> */}
    </Box>
  );
};

const Education = () => {
  return (
    <div
      id="education"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Center>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
        </Center>
        <div style={{ display: "flex" }}>
          <Grid justifyContent={"center"} alignContent={"center"} container>
            {educationData.map((education, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} md={12}>
                  <EducationBox
                    university={education.university}
                    program={education.program}
                    year={education.year}
                  />
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Education;
