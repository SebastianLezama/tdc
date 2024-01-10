import { extendTheme, theme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: "hsl(197,33%,40%)",
    secondary: {
      50: "rgba(20,50,100,10%)",
      100: "rgba(20,25,29,40%)",
      200: "rgba(20,25,29,50%)",
      300: "rgba(20,25,29,60%)",
      400: "rgba(20,25,29,75%)",
      500: "rgba(20,25,29,80%)",

    },
  },
  fonts: {
    family: "ubuntu",
  }
})