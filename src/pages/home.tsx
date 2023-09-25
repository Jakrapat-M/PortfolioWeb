import { Center } from "@chakra-ui/react";
import { Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Center id="home" height={"100vh"}>
        <Typography
          align="center"
          alignContent="center"
          alignItems="center"
          variant="h3"
        >
          Hello There
        </Typography>
      </Center>
    </div>
  );
};

export default HomePage;
