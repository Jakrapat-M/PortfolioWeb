import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        background: `linear-gradient(135deg, ${
          props.colorMode === "dark" ? "#020203, #2f2b34" : "#f5f5f5, #f9f9f9"
        })`,
      },
    }),
  },
});

export default theme;
