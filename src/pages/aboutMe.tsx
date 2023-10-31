import { Center, Container, Img, VStack } from "@chakra-ui/react";
import { Typography, Grid, Avatar, Stack } from "@mui/material";

const AboutMe = () => {
  return (
    <Center id="aboutMe" height={"100vh"}>
      <Grid
        justifyContent={"center"}
        alignContent={"center"}
        container
        spacing={2}
      >
        <Grid xs={12} md={4}>
          <Center>
            <img
              alt="profile"
              src="../src/assets/cat.jpg"
              className="rounded-full w-72 h-72 shadow-2xl shadow-black-500"
            />
          </Center>
        </Grid>
        <Grid xs={1}></Grid>
        <Grid xs={12} md={6} justifySelf={"center"} alignSelf={"center"}>
          <Typography variant="h5" className="animate-pulse text-white-300">
            Jakrapat Matures
          </Typography>
          <Typography>
            I'm a Third's Years student at King Mongkut's University of
            Technology Thonburi, Studying Computer Science ( English Program ).
            I'm looking forward for opportunity to learn new skills in
            development and data Science.
          </Typography>
        </Grid>
      </Grid>
    </Center>
  );
};

export default AboutMe;
