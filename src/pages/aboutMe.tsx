import { Center } from "@chakra-ui/react";
import { Container, Typography } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <div>
      <Center id="aboutMe" height={"100vh"}>
        <Typography
          align="center"
          alignContent="center"
          alignItems="center"
          variant="h5"
        >
          Hi, my name is Pun
        </Typography>
      </Center>
    </div>
  );
};

export default AboutMe;
