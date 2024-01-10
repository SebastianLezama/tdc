import { FlexProps, StackProps } from "@chakra-ui/react";


export const desktopNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2em",
  py: "1.4em",
  borderBottom: "1px",
  borderColor: "gray.400",
  display: {base: "none", md: "flex", lg: "flex"}
}

export const mobileNavStyles: FlexProps = {
  justify: "space-between",
  align: "center",
  px: "2em",
  py: "1.4em",
  borderBottom: "1px",
  borderColor: "gray.400",
  display: {base: "flex", md: "none", lg: "none"}

}

export const navBarStack: StackProps = {
  gap: 4,
  flex: 1,
  align: "center"
}