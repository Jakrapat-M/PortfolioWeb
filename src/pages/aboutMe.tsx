import { Center } from "@chakra-ui/react";
import { Typography, Grid } from "@mui/material";

const AboutMe = () => {
  return (
    <Center id="aboutMe" height={"100vh"}>
      <Grid
        justifyContent={"center"}
        alignContent={"center"}
        container
        rowSpacing={2}
      >
        <Grid item xs={12} md={4}>
          <Center>
            <img
              alt="profile"
              src="../src/assets/cat.jpg"
              className="rounded-full w-72 h-72 shadow-2xl shadow-black-500 object-cover"
            />
          </Center>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} md={6} justifySelf={"center"} alignSelf={"center"}>
          <Center>
            <Typography variant="h5" className="animate-pulse text-white-300">
              Jakrapat Matures
            </Typography>
          </Center>
          <Center>
            <Typography align="center" style={{ wordWrap: "break-word" }}>
              I'm a Third's Years student at King Mongkut's University of
              Technology Thonburi, Studying Computer Science ( English Program )
              I'm looking forward for opportunity to learn new skills in
              development and data Science.
            </Typography>
          </Center>
        </Grid>
      </Grid>
    </Center>
  );
};

export default AboutMe;
