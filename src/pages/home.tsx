import { Center } from "@chakra-ui/react";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Center id="home" height={"100vh"}>
        <Typography
          align="center"
          alignContent="center"
          alignItems="center"
          variant="h4"
        >
          Hello There
        </Typography>
      </Center>
    </div>
  );
};

export default HomePage;
