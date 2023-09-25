import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        background: `linear-gradient(135deg, ${
          props.colorMode === "dark"
            ? "rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 0.4)"
            : "rgba(249, 249, 249, 0.6), rgba(249, 249, 249, 0.4)"
        })`,
      },
    }),
  },
});

export default theme;
